# `@replit/revenuecat-sdk` SDK Docs

This SDK lets you interact with RevenueCat's Developer API to take actions like creating paywalls, products, entitlements, and more
that wouldn't otherwise be possible with the client-side `react-native-purchases` SDK.

## Usage

### Creating a Client

```ts
import { createClient } from '@replit/revenuecat-sdk/client';
import { listProjects, getCustomer } from '@replit/revenuecat-sdk';

const client = createClient({
  baseUrl: "https://api.revenuecat.com/v2",
  headers: {
    Authorization: `Bearer ${process.env.REVENUECAT_API_KEY}`,
  },
});
```

### Making Requests

Pass the client to each function:

```ts
// List all projects
const { data, error } = await listProjects({ client });

// Get a specific customer
const { data: customer } = await getCustomer({
  client,
  path: {
    project_id: 'proj_xxx',
    customer_id: 'cust_xxx',
  },
});
```

### Using Types

All request/response types are exported:

```ts
import type { Customer, Project, GetCustomerData } from '@replit/revenuecat-sdk';
```

### Error Handling

Functions return `{ data, error, response }`:

```ts
const { data, error } = await getCustomer({
  client,
  path: { project_id: 'proj_xxx', customer_id: 'cust_xxx' },
});

if (error) {
  console.error('Request failed:', error);
  return;
}
```

Use `throwOnError: true` to throw on non-2xx responses:

```ts
const { data } = await getCustomer({
  client,
  path: { project_id: 'proj_xxx', customer_id: 'cust_xxx' },
  throwOnError: true,
});
```

---

## Functions

### Paywalls

- `listPaywalls(options)` → `ListPaywalls` - Get a list of paywalls
- `createPaywall(options)` → `CreatePaywall` - Create a paywall
- `deletePaywall(options)` → `DeletePaywall` - Delete a paywall
- `getPaywall(options)` → `GetPaywall` - Get a paywall

### Apps

- `listAppPublicApiKeys(options)` → `ListAppPublicApiKeys` - Get a list of the public API keys of an app
- `listApps(options)` → `ListApps` - Get a list of apps
- `createApp(options)` → `CreateApp` - Create an app
- `deleteApp(options)` → `DeleteApp` - Delete an app
- `getApp(options)` → `GetApp` - Get an app
- `updateApp(options)` → `UpdateApp` - Update an app
- `getAppStorekitConfig(options)` → `GetAppStorekitConfig` - Get the StoreKit configuration for an app

### Projects

- `listProjects(options)` → `ListProjects` - Get a list of projects
- `createProject(options)` → `CreateProject` - Creates a new project

### Audit logs

- `listAuditLogs(options)` → `ListAuditLogs` - List audit logs

### Collaborators

- `listCollaborators(options)` → `ListCollaborators` - Get a list of collaborators

### Customers

- `listCustomers(options)` → `ListCustomers` - Get a list of customers
- `createCustomer(options)` → `CreateCustomer` - Create a customer
- `deleteCustomer(options)` → `DeleteCustomer` - Delete a customer
- `getCustomer(options)` → `GetCustomer` - Get a customer
- `transferCustomerData(options)` → `TransferCustomerData` - Transfer customer's subscriptions and one-time purchases to another customer
- `grantCustomerEntitlement(options)` → `GrantCustomerEntitlement` - Grant an entitlement to a customer
- `revokeCustomerGrantedEntitlement(options)` → `RevokeCustomerGrantedEntitlement` - Revoke a granted entitlement from a customer
- `assignCustomerOffering(options)` → `AssignCustomerOffering` - Assign or clear an offering override for a customer
- `listSubscriptions(options)` → `ListSubscriptions` - Get a list of subscriptions associated with a customer
- `listPurchases(options)` → `ListPurchases` - Get a list of purchases associated with a customer
- `listCustomerActiveEntitlements(options)` → `ListCustomerActiveEntitlements` - Get a list of customer's active entitlements
- `listCustomerAliases(options)` → `ListCustomerAliases` - Get a list of the customer's aliases
- `listVirtualCurrenciesBalances(options)` → `ListVirtualCurrenciesBalances` - Get a list of customer's virtual currencies balances
- `createVirtualCurrenciesTransaction(options)` → `CreateVirtualCurrenciesTransaction` - Create a virtual currencies transaction
- `updateVirtualCurrenciesBalance(options)` → `UpdateVirtualCurrenciesBalance` - Update a virtual currencies balance without creating a transaction
- `listCustomerAttributes(options)` → `ListCustomerAttributes` - Get a list of the customer's attributes
- `setCustomerAttributes(options)` → `SetCustomerAttributes` - Set a customer's attributes
- `listCustomerInvoices(options)` → `ListCustomerInvoices` - Get a list of the customer's invoices
- `getInvoice(options)` → `unknown` - Get an invoice

### Integrations

- `listWebhookIntegrations(options)` → `ListWebhookIntegrations` - List webhook integrations
- `createWebhookIntegration(options)` → `CreateWebhookIntegration` - Create a webhook integration
- `deleteWebhookIntegration(options)` → `DeleteWebhookIntegration` - Delete a webhook integration
- `getWebhookIntegration(options)` → `GetWebhookIntegration` - Get a webhook integration
- `updateWebhookIntegration(options)` → `UpdateWebhookIntegration` - Update a webhook integration

### Products

- `deleteProduct(options)` → `DeleteProduct` - Delete a product
- `getProduct(options)` → `GetProduct` - Get a product
- `updateProduct(options)` → `UpdateProduct` - Update a product
- `archiveProduct(options)` → `ArchiveProduct` - Archive a product
- `unarchiveProduct(options)` → `UnarchiveProduct` - Unarchive a product
- `createProductInStore(options)` → `CreateProductInStore` - Push a product to the store
- `listProducts(options)` → `ListProducts` - Get a list of products
- `createProduct(options)` → `CreateProduct` - Create a product
- `getProductStoreState(options)` → `GetProductStoreState` - Get a product store state
- `setProductStoreState(options)` → `SetProductStoreState` - Set a product store state
- `getProductStoreStateOperation(options)` → `GetProductStoreStateOperation` - Get a product store state operation
- `uploadProductStoreStateScreenshot(options)` → `UploadProductStoreStateScreenshot` - Reserve a product store state screenshot upload

### Virtual currencies

- `listVirtualCurrencies(options)` → `ListVirtualCurrencies` - Get a list of virtual currencies
- `createVirtualCurrency(options)` → `CreateVirtualCurrency` - Create a virtual currency
- `deleteVirtualCurrency(options)` → `DeleteVirtualCurrency` - Delete a virtual currency
- `getVirtualCurrency(options)` → `GetVirtualCurrency` - Get a virtual currency
- `updateVirtualCurrency(options)` → `UpdateVirtualCurrency` - Update a virtual currency
- `archiveVirtualCurrency(options)` → `ArchiveVirtualCurrency` - Archive a virtual currency
- `unarchiveVirtualCurrency(options)` → `UnarchiveVirtualCurrency` - Unarchive a virtual currency

### Entitlements

- `deleteEntitlement(options)` → `DeleteEntitlement` - Delete an entitlement
- `getEntitlement(options)` → `GetEntitlement` - Get an entitlement
- `updateEntitlement(options)` → `UpdateEntitlement` - Update an entitlement
- `listEntitlements(options)` → `ListEntitlements` - Get a list of entitlements
- `createEntitlement(options)` → `CreateEntitlement` - Create an entitlement
- `getProductsFromEntitlement(options)` → `GetProductsFromEntitlement` - Get a list of products attached to a given entitlement
- `archiveEntitlement(options)` → `ArchiveEntitlement` - Archive an entitlement
- `unarchiveEntitlement(options)` → `UnarchiveEntitlement` - Unarchive an entitlement
- `attachProductsToEntitlement(options)` → `AttachProductsToEntitlement` - Attach a set of products to an entitlement
- `detachProductsFromEntitlement(options)` → `DetachProductsFromEntitlement` - Detach a set of product from an entitlement

### Offerings

- `deleteOffering(options)` → `DeleteOffering` - Delete an offering and its attached packages
- `getOffering(options)` → `GetOffering` - Get an offering
- `updateOffering(options)` → `UpdateOffering` - Update an offering
- `archiveOffering(options)` → `ArchiveOffering` - Archive an offering
- `unarchiveOffering(options)` → `UnarchiveOffering` - Unarchive an offering
- `listOfferings(options)` → `ListOfferings` - Get a list of offerings
- `createOffering(options)` → `CreateOffering` - Create an offering
- `listPackages(options)` → `ListPackages` - Get a list of packages in an offering
- `createPackages(options)` → `CreatePackages` - Create a package

### Packages

- `deletePackageFromOffering(options)` → `DeletePackageFromOffering` - Delete a package
- `getPackage(options)` → `GetPackage` - Get a package
- `updatePackage(options)` → `UpdatePackage` - Update a package
- `getProductsFromPackage(options)` → `GetProductsFromPackage` - Get a list of products attached to a given package of an offering
- `attachProductsToPackage(options)` → `AttachProductsToPackage` - Attach a set of products to a package
- `detachProductsFromPackage(options)` → `DetachProductsFromPackage` - Detach a set of products from a package

### Subscriptions

- `getSubscription(options)` → `GetSubscription` - Get a subscription
- `getPlayStoreOrAppStoreSubscriptionTransactions(options)` → `GetPlayStoreOrAppStoreSubscriptionTransactions` - Get a Play Store or App Store subscription's transactions
- `refundPlayStoreSubscriptionTransaction(options)` → `RefundPlayStoreSubscriptionTransaction` - Refund a Play Store subscription's transaction
- `listSubscriptionEntitlements(options)` → `ListSubscriptionEntitlements` - Get a list of entitlements associated with a subscription
- `cancelSubscription(options)` → `CancelSubscription` - Cancel an active Web Billing subscription
- `refundSubscription(options)` → `RefundSubscription` - Refund an active Web Billing subscription
- `getAuthorizedSubscriptionManagementUrl(options)` → `GetAuthorizedSubscriptionManagementUrl` - Get an authenticated Web Billing customer portal URL
- `searchSubscriptions(options)` → `SearchSubscriptions` - Search subscriptions by store subscription identifier

### Purchases

- `getPurchase(options)` → `GetPurchase` - Get a purchase
- `listPurchaseEntitlements(options)` → `ListPurchaseEntitlements` - Get a list of entitlements associated with a purchase
- `refundPurchase(options)` → `RefundPurchase` - Refund a Web Billing purchase
- `searchPurchases(options)` → `SearchPurchases` - Search one-time purchases by store purchase identifier

### Metrics

- `getOverviewMetrics(options)` → `GetOverviewMetrics` - Get overview metrics for a project

### Charts

- `getChartData(options)` → `GetChartData` - Get chart data
- `getChartOptions(options)` → `GetChartOptions` - Get available options for a chart

### Undocumented Endpoints

The RevenueCat API has endpoints that are not implemented in this SDK.
They can be accessed directly using the client's HTTP methods (`get`, `post`, etc.).

#### Add Price to Test Store Product

`POST /projects/{project_id}/products/{product_id}/test_store_prices`

Request Body:

```json
{
  "prices": [
    { "amount_micros": 9990000, "currency": "USD" },
    { "amount_micros": 8990000, "currency": "EUR" }
  ]
}
```

Usage:

```ts
const { data } = await client.post({
  url: '/projects/{project_id}/products/{product_id}/test_store_prices',
  path: { project_id, product_id },
  body: {
    prices: [
      { amount_micros: 9990000, currency: 'USD' },
      { amount_micros: 8990000, currency: 'EUR' },
    ],
  },
});
```

#### List Test Store Product Prices

`GET /projects/{project_id}/products/{product_id}/test_store_prices`

Usage:

```ts
const { data } = await client.get({
  url: '/projects/{project_id}/products/{product_id}/test_store_prices',
  path: { project_id, product_id },
});
```

Response:

```json
[
  { "amount": 599, "amount_micros": 5990000, "currency": "USD" },
  { "amount": 549, "amount_micros": 5490000, "currency": "EUR" }
]
```
