---
name: stripe
description: Guidelines for using Stripe to integrate payments in mobile apps and any subsequent CRUD operations related to any Stripe entities
---

## Introduction

Replit offers a native integration with Stripe that allows users to implement payments in their applications

## Prerequisites

1. These packages must be installed in the workspace root package.json:
    - `stripe` - Official Stripe SDK for API operations
    - `stripe-replit-sync` - Handles webhook processing and database sync. Documentation: https://www.npmjs.com/package/stripe-replit-sync

    If they are not installed, use npm to install them: `$ cd /home/runner/workspace && npm install <packages>`


2. The Stripe integration must be connected to the repl. You can do this by proposing the integration. Reference the `integrations` skill if necessary.
    Once connected, create `stripeClient.ts` using the template from the code-templates reference -- this file fetches Stripe credentials from the Replit connection API and provides the authenticated client via `getUncachableStripeClient()`.

    Create it in the `server/` directory.


3. Ensure a PostgreSQL database exists. If you don't have one yet, use the tool to create a PostgreSQL database. Never use memory database for storing Stripe data.

You are required to ensure these requirements are met before setting up or using Stripe.

## Project Structure

- **Scripts directory**: `scripts/` at the workspace root (e.g., `scripts/seed-products.ts`)
- **Run a script**: `npx tsx scripts/<script>.ts`
- **API server directory**: `server/`
- **Client app directory**: `client/`

Reference files use these terms. Map them to these concrete paths.

## Initial Setup: Step-by-Step Implementation

Ensure prerequisites are met. Do not proceed until you have done so.

Follow these steps in order when implementing Stripe integration for the user. Create a task list to track implementation progress.

Read the code-templates reference file for full code file templates to use during these steps.

1. Set Up Database

    Create the users table with Stripe ID references:

    ```sql
    CREATE TABLE users (
      id TEXT PRIMARY KEY,
      email TEXT,
      stripe_customer_id TEXT,
      stripe_subscription_id TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );
    ```

    **Important**: stripe-replit-sync creates the `stripe` schema automatically. Create application tables (users, orders, etc.) in the public schema, not in the stripe schema.

2. Create Webhook Handler

    In the API server create `webhookHandlers.ts` - use the template provided in the code-templates reference. It handles webhook processing by calling `getStripeSync()` from stripeClient.

3. Initialize Stripe on Startup

    Add this initialization function to the API server's index.ts. **Important order:**

    1. Run migrations to create schema
    2. Get StripeSync instance
    3. Set up managed webhook (uses StripeSync)
    4. Sync existing data with syncBackfill()

    ```typescript
    import { runMigrations } from 'stripe-replit-sync';
    import { getStripeSync } from './stripeClient';

    async function initStripe() {
      const databaseUrl = process.env.DATABASE_URL;
      if (!databaseUrl) throw new Error('DATABASE_URL required');

      // 1. Create stripe schema and tables
      await runMigrations({ databaseUrl });

      // 2. Get StripeSync instance (needed for webhook setup and backfill)
      const stripeSync = await getStripeSync();

      // 3. Set up managed webhook
      const webhookBaseUrl = `https://${process.env.REPLIT_DOMAINS?.split(',')[0]}`;
      const { webhook } = await stripeSync.findOrCreateManagedWebhook(
        `${webhookBaseUrl}/api/stripe/webhook`
      );

      // 4. Sync all existing Stripe data
      await stripeSync.syncBackfill();
    }

    await initStripe();
    ```

4. Register Webhook Route in index.ts

    **Critical:** Register the webhook route BEFORE `express.json()` middleware. See the indexTemplate for the correct pattern:

    1. Route path is `/api/stripe/webhook`
    2. Webhook route uses `express.raw()` to get Buffer in `req.body`
    3. Webhook route is registered BEFORE `app.use(express.json())`
    4. Other routes registered after get parsed JSON automatically

    ```typescript
    app.post(
      '/api/stripe/webhook',
      express.raw({ type: 'application/json' }),
      async (req, res) => {
        const signature = req.headers['stripe-signature'];
        if (!signature) return res.status(400).json({ error: 'Missing signature' });

        const sig = Array.isArray(signature) ? signature[0] : signature;

        await WebhookHandlers.processWebhook(req.body as Buffer, sig);
        res.status(200).json({ received: true });
      }
    );

    app.use(express.json()); // Now apply to other routes
    ```

5. Create Storage Layer

    Create `storage.ts` - use the template provided in the code-templates reference. Query Stripe data from PostgreSQL `stripe` schema using standard SQL queries.

6. Set Up Other Routes

    Create `routes.ts` - use the template provided in the code-templates reference for products, prices, checkout, etc. These routes are registered AFTER `express.json()` so they get parsed JSON.

7. Create Products Script (Recommended)

    Create `seed-products.ts` - a script to add products and prices to Stripe via the API. **This is the recommended way to create products. Run it manually when creating products.**

    Use the seed-products template from the code-templates reference as a starting point:

    - Modify the script to create the specific products needed
    - Run it manually when adding products: `node seed-products.js`
    - Webhooks automatically sync created products to the database
    - Stripe handles test vs live mode based on API keys

    ```typescript
    import { getUncachableStripeClient } from './stripeClient';

    async function createProducts() {
      const stripe = await getUncachableStripeClient();

      // Create product
      const product = await stripe.products.create({
        name: 'Pro Plan',
        description: 'Professional subscription',
      });

      // Create prices for the product
      const monthlyPrice = await stripe.prices.create({
        product: product.id,
        unit_amount: 2900, // $29.00
        currency: 'usd',
        recurring: { interval: 'month' },
      });

      console.log('Created:', product.id, monthlyPrice.id);
    }

    createProducts();
    ```

    **Usage:**
    Run this script in development when you need to create or add products.

    **Optional idempotency:**
    To make the script safe to run multiple times, check if specific products exist first:

    ```typescript
    const products = await stripe.products.search({ query: "name:'Pro Plan'" });
    if (products.data.length > 0) {
      console.log('Pro Plan already exists');
      return;
    }
    ```

## Database Architecture

1. **stripe-replit-sync creates and manages the `stripe` schema automatically** - DO NOT create any tables in the stripe schema
2. The stripe schema contains tables for: products, prices, customers, subscriptions, payment_intents, etc.
3. **Application tables are created in the public schema (or other schemas)** - e.g., users, orders, etc.
4. Application tables store Stripe IDs as TEXT columns (e.g., `stripe_customer_id TEXT`, `stripe_subscription_id TEXT`)
5. Replit automatically handles deployment and Stripe data migration moving from sandbox to live.

## Synchronization Flow

1. Stripe credentials are fetched from Replit connection API
2. **`runMigrations()`** creates the stripe schema and all Stripe tables (idempotent, safe to run on every startup)
3. **`syncBackfill()`** syncs ALL existing Stripe data from Stripe API to the local PostgreSQL database on startup
4. **Managed webhooks** are automatically configured by `stripe-replit-sync`
5. **Webhooks** keep data up-to-date when changes occur in Stripe after startup
6. Application queries Stripe data from PostgreSQL `stripe` schema (fast, no API calls needed)

## Storing Data

Do NOT Create Product Tables or Maintain Any Other Source of Truth for Stripe Data

**Bad** -- creates duplicate product storage:

```ts
export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  name: text("name"),
  price: integer("price"),
  // ... custom fields
});
```

Correct Approach:

- NO product tables needed!
- Query directly from `stripe.products` and `stripe.prices`
- Use Stripe's metadata field for ALL custom attributes

### Creating Products and Prices

**NEVER insert data directly into the stripe schema tables.** Instead:
- Create products via Stripe API (using scripts)
- Stripe webhooks managed by stripe-replit-sync automatically sync the data to the stripe schema in the local database
- Query the synced data from the `stripe` schema tables using standard SQL queries

Create products in Stripe with metadata (use API or script):

```ts
await stripe.products.create({
  name: "Product Name",
  description: "...",
  images: ["https://..."],
  metadata: {
    category: "electronics",
    customField1: "value1",
    featured: "true",
  }
});
await stripe.prices.create({
  product: product.id,
  unit_amount: 9999,
  currency: 'usd',
});
```

Query from synced stripe tables:

```ts
const result = await db.execute(sql`
  SELECT
    p.id,
    p.name,
    p.metadata,
    pr.id as price_id,
    pr.unit_amount
  FROM stripe.products p
  JOIN stripe.prices pr ON pr.product = p.id
  WHERE p.active = true
`);
```

Use real Stripe price IDs in checkout:

```ts
// CORRECT
{ price: "price_1ABC...", quantity: 1 }
// WRONG - Never use price_data
{
  price_data: {
    unit_amount: 9999,
    currency: 'usd',
    product_data: { name: "..." }
  }
}
```

### Decision Tree: When to Create Tables

- Products/Prices? -- NO, use `stripe.products`/`stripe.prices`
- Customers? -- NO, use `stripe.customers`
- Subscriptions? -- NO, use `stripe.subscriptions`
- Orders/Cart/User preferences? -- YES, these aren't in Stripe
- Relationships to Stripe data? -- YES, store Stripe IDs as foreign keys

**Key Principle: "If it exists in Stripe, it belongs in Stripe"**

- Don't duplicate Stripe data in your own tables
- Don't create parallel storage systems
- Stripe + metadata = your complete product catalog
- Your tables should only store data that Stripe doesn't manage

**Creating products:**
Write a seed script that calls Stripe API (`stripe.products.create()`, `stripe.prices.create()`). Run this script in development to create your products. Webhooks automatically sync them to the database. Replit handles deployment automatically.

**Workflow:**

```bash
# Development:
# - Run seed script to create products in Stripe (test mode)
# - syncBackfill() syncs them to local database

# Deployment (handled by Replit):
# - Replit copies products/prices from dev Stripe to prod Stripe
# - Your code runs unchanged, syncBackfill() syncs prod database

# Production:
# - Modify products via Stripe Dashboard (scripts can't run in deployments)
# - Webhooks automatically sync changes to database
```

## Publishing with Stripe

To publish the app with working Stripe payments:

1. Go to the Stripe Dashboard (https://dashboard.stripe.com/apikeys)
2. Get live API keys (starts with `pk_live_` and `sk_live_`)
3. Open the Publish pane in the Workspace
4. Enter the live Publishable Key and Secret Key
5. Publish the app

**Placeholder Keys (User-Requested Only):**

Only offer placeholder keys if the user explicitly asks to publish without live Stripe keys and understands the consequences. Do NOT use these for any other purpose.

If the user confirms they want to proceed without live keys, suggest the following values to them:
- **Publishable Key:** `pk_live_abcdef`
- **Secret Key:** `sk_live_abcdef`

**Consequences the user must understand:**
- Placeholder keys will NOT process real payments
- The product catalog and checkout will not function on the published URL
- Real Stripe keys must be added later for payments to work

## Deleting Stripe Integration

To remove the Stripe integration from the project:

1. In the project, open the "Integrations" tab
2. Go to "Stripe" and click "Manage"
3. Select "Edit" then "Delete"

## Secrets and Environment Variables

**NEVER write secrets or environment variables directly to the `.replit` file.** This includes Stripe API keys, webhook signing secrets, database URLs, and any other sensitive configuration. Instead, reference the `environment-secrets` skill for the correct way to manage secrets and environment variables.

## Key Rules

**DO:**
- Create products via Stripe API using scripts (never with SQL INSERT)
- Query Stripe data from PostgreSQL `stripe` schema tables (products, prices, customers, subscriptions, etc.)
- Store Stripe IDs in application tables as TEXT (e.g., `stripe_customer_id TEXT`)
- Keep webhook handler minimal (just call `processWebhook` with payload and signature)
- Let `syncBackfill()` sync existing Stripe data on startup
- Let managed webhooks handle webhook configuration automatically
- Register webhook route BEFORE `express.json()` middleware

**ABSOLUTELY DO NOT:**
- Create any tables in the `stripe` schema - stripe-replit-sync manages this automatically
- Insert, update, or delete data in `stripe` schema tables - only query from them
- Use SQL INSERT for products, prices, customers, subscriptions - use Stripe API instead
- Manually copy database data between environments - Replit handles Stripe product/price copying during deployment
- Add custom logic in webhook handler beyond calling `processWebhook`
- Skip running `runMigrations()` or `syncBackfill()`
- Create StripeSync instance before calling `runMigrations()`

## Common Mistakes

**Database - DO NOT create Stripe tables:**

```sql
-- WRONG - Creating Stripe tables manually
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT,
  price INTEGER
);

-- CORRECT - Create application tables, store Stripe IDs
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  stripe_customer_id TEXT
);
-- stripe-replit-sync creates stripe.products, stripe.prices, etc. automatically
```

**Data Creation - Use Stripe API Scripts, NOT SQL:**

```sql
-- WRONG - Inserting Stripe data with SQL
INSERT INTO stripe.products (id, name, description)
VALUES ('prod_123', 'Pro Plan', 'Professional subscription');
```

```typescript
// CORRECT - Use Stripe API in a script
const stripe = await getUncachableStripeClient();
const product = await stripe.products.create({
  name: 'Pro Plan',
  description: 'Professional subscription',
});
// Webhook syncs this to stripe.products automatically
```

**Initialization Order:**

```typescript
// WRONG - Creating StripeSync before migrations
const stripeSync = await getStripeSync();
await runMigrations({ databaseUrl });

// CORRECT - Migrations first, then StripeSync
await runMigrations({ databaseUrl });
const stripeSync = await getStripeSync();
await stripeSync.findOrCreateManagedWebhook(...);
await stripeSync.syncBackfill();
```

**Frontend - Must parse JSON responses:**

```typescript
// WRONG - returns Response object
const response = await apiRequest('POST', '/api/checkout', { priceId });
return response;

// CORRECT - parse to get data
const response = await apiRequest('POST', '/api/checkout', { priceId });
return await response.json();
```

**Backend - Webhook route ordering:**

```typescript
// WRONG - Webhook after express.json()
app.use(express.json());
app.post('/api/stripe/webhook', ...);  // Too late! Body already parsed

// CORRECT - Webhook BEFORE express.json()
app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }),
  async (req, res) => {
    await WebhookHandlers.processWebhook(req.body, sig);
  }
);
app.use(express.json());  // Now apply to other routes
```

## References

- ./references/code-templates.md -- Code file templates for initial Stripe setup. ONLY read this reference when performing initial setup of Stripe in a project that does not already have it configured. Do not read for subsequent modifications, queries, or other Stripe operations.
