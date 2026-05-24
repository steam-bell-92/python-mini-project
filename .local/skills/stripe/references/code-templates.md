# Stripe Code Templates

## Code Files

Filename: seed-products.ts (in the scripts directory)

```ts
import { getUncachableStripeClient } from './stripeClient';

/**
 * Script to create products and prices in Stripe
 *
 * This script is idempotent - it checks if products exist before creating them.
 * You can run it multiple times safely.
 *
 * Modify this script to add the products and prices you need.
 *
 * Run with: npx tsx seed-products.ts
 * Or after compiling: node seed-products.js
 */
async function createProducts() {
  try {
    const stripe = await getUncachableStripeClient();

    console.log('Creating products and prices in Stripe...');

    // Check if Pro Plan product already exists
    const existingProducts = await stripe.products.search({ 
      query: "name:'Pro Plan' AND active:'true'" 
    });
    
    if (existingProducts.data.length > 0) {
      console.log('Pro Plan product already exists. Skipping creation.');
      console.log(`Existing product ID: ${existingProducts.data[0].id}`);
      return;
    }

    // Create a Pro Plan product
    const proProduct = await stripe.products.create({
      name: 'Pro Plan',
      description: 'Professional subscription with advanced features',
    });
    console.log(`Created product: ${proProduct.name} (${proProduct.id})`);

    // Create a monthly price for the Pro Plan
    const proMonthlyPrice = await stripe.prices.create({
      product: proProduct.id,
      unit_amount: 2900, // $29.00
      currency: 'usd',
      recurring: {
        interval: 'month',
      },
    });
    console.log(`Created monthly price: $29.00/month (${proMonthlyPrice.id})`);

    // Create a yearly price for the Pro Plan
    const proYearlyPrice = await stripe.prices.create({
      product: proProduct.id,
      unit_amount: 29000, // $290.00 (save ~17%)
      currency: 'usd',
      recurring: {
        interval: 'year',
      },
    });
    console.log(`Created yearly price: $290.00/year (${proYearlyPrice.id})`);

    console.log('✓ Products and prices created successfully!');
    console.log('Webhooks will sync this data to your database automatically.');
    
  } catch (error: any) {
    console.error('Error creating products:', error.message);
    process.exit(1);
  }
}

// Run the function
createProducts();
```

Filename: stripeClient.ts (in the API server directory; also copy to the scripts directory)

```ts
import Stripe from 'stripe';
import { StripeSync } from 'stripe-replit-sync';

/**
 * Fetches Stripe credentials from the Replit connection API.
 * Not cached -- tokens can rotate, so fetch fresh each time.
 */
async function getStripeCredentials(): Promise<{ secretKey: string; webhookSecret?: string }> {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!hostname || !xReplitToken) {
    throw new Error(
      'Missing Replit environment variables. ' +
      'Ensure the Stripe integration is connected via the Integrations tab.'
    );
  }

  const resp = await fetch(
    `https://${hostname}/api/v2/connection?include_secrets=true&connector_names=stripe`,
    {
      headers: { Accept: "application/json", X_REPLIT_TOKEN: xReplitToken },
      signal: AbortSignal.timeout(10_000),
    }
  );

  if (!resp.ok) {
    throw new Error(`Failed to fetch Stripe credentials: ${resp.status} ${resp.statusText}`);
  }

  const data = await resp.json();
  const settings = data.items?.[0]?.settings;

  if (!settings?.secret_key) {
    throw new Error(
      'Stripe integration not connected or missing secret key. ' +
      'Connect Stripe via the Integrations tab first.'
    );
  }

  return {
    secretKey: settings.secret_key,
    webhookSecret: settings.webhook_secret,
  };
}

/**
 * Returns a fresh authenticated Stripe client.
 * Not cached -- fetches credentials on every call so rotated keys are picked up.
 */
export async function getUncachableStripeClient(): Promise<Stripe> {
  const { secretKey } = await getStripeCredentials();
  return new Stripe(secretKey);
}

/**
 * Returns a fresh StripeSync instance for webhook processing and data sync.
 * Not cached -- fetches credentials on every call so rotated keys are picked up.
 */
export async function getStripeSync(): Promise<StripeSync> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const { secretKey, webhookSecret } = await getStripeCredentials();
  return new StripeSync({
    poolConfig: { connectionString: databaseUrl },
    stripeSecretKey: secretKey,
    stripeWebhookSecret: webhookSecret ?? '',
  });
}
```

Filename: webhookHandlers.ts (in the API server directory)

```ts
import { getStripeSync } from './stripeClient';

export class WebhookHandlers {
  static async processWebhook(payload: Buffer, signature: string): Promise<void> {
    // Validate payload is a Buffer
    if (!Buffer.isBuffer(payload)) {
      throw new Error(
        'STRIPE WEBHOOK ERROR: Payload must be a Buffer. ' +
        'Received type: ' + typeof payload + '. ' +
        'This usually means express.json() parsed the body before reaching this handler. ' +
        'FIX: Ensure webhook route is registered BEFORE app.use(express.json()).'
      );
    }

    const sync = await getStripeSync();
    await sync.processWebhook(payload, signature);
  }
}
```

Filename: stripeService.ts (in the API server directory)

```ts
import { storage } from './storage';
import { getUncachableStripeClient } from './stripeClient';

/**
 * StripeService: Handles direct Stripe API operations
 * Pattern: Use Stripe client for write operations, storage for read operations
 */
export class StripeService {
  // Create customer in Stripe
  async createCustomer(email: string, userId: string) {
    const stripe = await getUncachableStripeClient();
    return await stripe.customers.create({
      email,
      metadata: { userId },
    });
  }

  // Create checkout session
  async createCheckoutSession(customerId: string, priceId: string, successUrl: string, cancelUrl: string) {
    const stripe = await getUncachableStripeClient();
    return await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  }

  // Create customer portal session
  async createCustomerPortalSession(customerId: string, returnUrl: string) {
    const stripe = await getUncachableStripeClient();
    return await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });
  }

  // Read operations - delegate to storage (queries PostgreSQL)
  async getProduct(productId: string) {
    return await storage.getProduct(productId);
  }

  async getSubscription(subscriptionId: string) {
    return await storage.getSubscription(subscriptionId);
  }
}

export const stripeService = new StripeService();
```

Filename: storage.ts (in the API server directory)

```ts
import { users } from '@shared/schema';
import { eq, sql } from 'drizzle-orm';
import { db } from './db';

/**
 * Storage: Query Stripe data from PostgreSQL
 * Pattern: Simple SQL queries to stripe.* tables
 */
export class Storage {
  // Query Stripe data from stripe.products table
  async getProduct(productId: string) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.products WHERE id = ${productId}`
    );
    return result.rows[0] || null;
  }

  async listProducts(active = true, limit = 20, offset = 0) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.products WHERE active = ${active} LIMIT ${limit} OFFSET ${offset}`
    );
    return result.rows;
  }

  // Get products with their prices (with proper pagination)
  // This paginates on products first, then joins only active prices
  async listProductsWithPrices(active = true, limit = 20, offset = 0) {
    const result = await db.execute(
      sql`
        WITH paginated_products AS (
          SELECT id, name, description, metadata, active
          FROM stripe.products
          WHERE active = ${active}
          ORDER BY id
          LIMIT ${limit} OFFSET ${offset}
        )
        SELECT 
          p.id as product_id,
          p.name as product_name,
          p.description as product_description,
          p.active as product_active,
          p.metadata as product_metadata,
          pr.id as price_id,
          pr.unit_amount,
          pr.currency,
          pr.recurring,
          pr.active as price_active,
          pr.metadata as price_metadata
        FROM paginated_products p
        LEFT JOIN stripe.prices pr ON pr.product = p.id AND pr.active = true
        ORDER BY p.id, pr.unit_amount
      `
    );
    return result.rows;
  }

  // Query Stripe data from stripe.prices table
  async getPrice(priceId: string) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.prices WHERE id = ${priceId}`
    );
    return result.rows[0] || null;
  }

  async listPrices(active = true, limit = 20, offset = 0) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.prices WHERE active = ${active} LIMIT ${limit} OFFSET ${offset}`
    );
    return result.rows;
  }

  // Get prices for a specific product
  // Note: productId should be the product's id from stripe.products table
  async getPricesForProduct(productId: string) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.prices WHERE product = ${productId} AND active = true`
    );
    return result.rows;
  }

  // Query subscription
  async getSubscription(subscriptionId: string) {
    const result = await db.execute(
      sql`SELECT * FROM stripe.subscriptions WHERE id = ${subscriptionId}`
    );
    return result.rows[0] || null;
  }

  // User operations
  async getUser(id: string) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async updateUserStripeInfo(userId: string, stripeInfo: {
    stripeCustomerId?: string;
    stripeSubscriptionId?: string;
  }) {
    const [user] = await db.update(users).set(stripeInfo).where(eq(users.id, userId)).returning();
    return user;
  }
}

export const storage = new Storage();
```

Filename: routes/index.ts (in the API server directory)

```ts
import { Router, type IRouter } from 'express';
import stripeRouter from './stripe';

const router: IRouter = Router();

router.use(stripeRouter);

export default router;
```

Filename: routes/stripe.ts (in the API server directory)

```ts
import { Router, type IRouter } from 'express';
import { storage } from '../storage';
import { stripeService } from '../stripeService';

const router: IRouter = Router();

// Get user subscription
router.get('/subscription', async (req: any, res) => {
  const user = await storage.getUser(req.user.id);
  if (!user?.stripeSubscriptionId) {
    return res.json({ subscription: null });
  }

  const subscription = await storage.getSubscription(user.stripeSubscriptionId);
  res.json({ subscription });
});

// Create checkout session
router.post('/checkout', async (req: any, res) => {
  const user = await storage.getUser(req.user.id);
  const { priceId } = req.body;

  // Create or get customer
  let customerId = user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripeService.createCustomer(user.email, user.id);
    await storage.updateUserStripeInfo(user.id, { stripeCustomerId: customer.id });
    customerId = customer.id;
  }

  // Create checkout session
  const session = await stripeService.createCheckoutSession(
    customerId,
    priceId,
    `${req.protocol}://${req.get('host')}/checkout/success`,
    `${req.protocol}://${req.get('host')}/checkout/cancel`
  );

  res.json({ url: session.url });
});

// List products
router.get('/products', async (_req, res) => {
  const products = await storage.listProducts();
  res.json({ data: products });
});

// List products with prices (joined)
router.get('/products-with-prices', async (_req, res) => {
  const rows = await storage.listProductsWithPrices();

  // Group prices by product
  const productsMap = new Map();
  for (const row of rows) {
    if (!productsMap.has(row.product_id)) {
      productsMap.set(row.product_id, {
        id: row.product_id,
        name: row.product_name,
        description: row.product_description,
        active: row.product_active,
        prices: []
      });
    }
    if (row.price_id) {
      productsMap.get(row.product_id).prices.push({
        id: row.price_id,
        unit_amount: row.unit_amount,
        currency: row.currency,
        recurring: row.recurring,
        active: row.price_active,
      });
    }
  }

  res.json({ data: Array.from(productsMap.values()) });
});

// List prices
router.get('/prices', async (_req, res) => {
  const prices = await storage.listPrices();
  res.json({ data: prices });
});

// Get prices for a specific product
router.get('/products/:productId/prices', async (req, res) => {
  const { productId } = req.params;

  // Validate product exists (productId should be the id from stripe.products)
  const product = await storage.getProduct(productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const prices = await storage.getPricesForProduct(productId);
  res.json({ data: prices });
});

export default router;
```

Filename: app.ts (in the API server directory)

```ts
import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";
import { WebhookHandlers } from "./webhookHandlers";

const app: Express = express();

// Register Stripe webhook route BEFORE other middleware
// This is critical - webhook needs raw Buffer, not parsed JSON
app.post(
  '/api/stripe/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const signature = req.headers['stripe-signature'];

    if (!signature) {
      return res.status(400).json({ error: 'Missing stripe-signature' });
    }

    try {
      const sig = Array.isArray(signature) ? signature[0] : signature;

      // Validate that req.body is a Buffer (not parsed JSON)
      if (!Buffer.isBuffer(req.body)) {
        const errorMsg = 'STRIPE WEBHOOK ERROR: req.body is not a Buffer. ' +
          'This means express.json() ran before this webhook route. ' +
          'FIX: Move this webhook route registration BEFORE app.use(express.json()) in your code.';
        console.error(errorMsg);
        return res.status(500).json({ error: 'Webhook processing error' });
      }

      await WebhookHandlers.processWebhook(req.body as Buffer, sig);

      res.status(200).json({ received: true });
    } catch (error: any) {
      console.error('Webhook error:', error.message);

      // Log helpful error message if it's the common "payload must be Buffer" error
      if (error.message && error.message.includes('payload must be provided as a string or a Buffer')) {
        const helpfulMsg = 'STRIPE WEBHOOK ERROR: Payload is not a Buffer. ' +
          'This usually means express.json() parsed the body before the webhook handler. ' +
          'FIX: Ensure the webhook route is registered BEFORE app.use(express.json()).';
        console.error(helpfulMsg);
      }

      res.status(400).json({ error: 'Webhook processing error' });
    }
  }
);

// Apply middleware after webhook route
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes under /api prefix
app.use("/api", router);

export default app;
```

Filename: index.ts (in the API server directory)

```ts
import { runMigrations } from 'stripe-replit-sync';
import { getStripeSync } from "./stripeClient";
import app from "./app";

/**
 * Initialize Stripe schema and sync data on startup
 */
async function initStripe() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error(
      'DATABASE_URL environment variable is required for Stripe integration. ' +
      'Please create a PostgreSQL database first.'
    );
  }

  try {
    console.log('Initializing Stripe schema...');
    await runMigrations({
      databaseUrl,
      schema: 'stripe'
    });
    console.log('Stripe schema ready');

    const stripeSync = await getStripeSync();

    console.log('Setting up managed webhook...');
    const webhookBaseUrl = `https://${process.env.REPLIT_DOMAINS?.split(',')[0]}`;
    const webhookResult = await stripeSync.findOrCreateManagedWebhook(
      `${webhookBaseUrl}/api/stripe/webhook`);
    console.log('Webhook configured:', JSON.stringify(webhookResult?.webhook?.url || 'setup complete'));

    console.log('Syncing Stripe data...');
    stripeSync.syncBackfill()
      .then(() => {
        console.log('Stripe data synced');
      })
      .catch((err) => {
        console.error('Error syncing Stripe data:', err);
      });
  } catch (error) {
    console.error('Failed to initialize Stripe:', error);
    throw error;
  }
}

const port = Number(process.env.PORT);
if (!port) {
  throw new Error('PORT environment variable is required');
}

await initStripe();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```
