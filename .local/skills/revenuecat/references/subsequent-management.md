# Subsequent Data Access & Management

**CRITICAL**: DO NOT rely on hard-coded values nor reference the initial seed script for fetching data.

Ensure prerequisites are met. Do not proceed until you have done so.

Create a task list to track implementation progress.

If the user asks to inspect, fetch, or modify RevenueCat data (e.g., "list my products", "check project settings") AFTER the initial setup:
    - **Always use a standalone script**: Create a minimal script (e.g., `checkRevenueCat.ts` in the scripts directory) using the generated `getUncachableRevenueCatClient()` function to get an authenticated client.

    - NEVER reuse the seed script used for initial setup. Always create a new script.

    - Then execute the script using the run command defined in the Project Structure section of the main skill doc.

    - **Source of Truth**: Always treat the RevenueCat API as the source of truth. Never attempt to query the local database for products, entitlements, or offerings.

    - **Environment Variables**: Use the environment variables created during the seed process. Never hard-code IDs:

        - `REVENUECAT_PROJECT_ID`
        - `REVENUECAT_TEST_STORE_APP_ID`
        - `REVENUECAT_APPLE_APP_STORE_APP_ID`
        - `REVENUECAT_GOOGLE_PLAY_STORE_APP_ID`

    - **Store Distinction**: Use the `app_id` from the API response to distinguish between the Test Store and production App/Play stores by comparing it to the environment variables above.

    - **Minimal Example**:

        ```ts
        import { getUncachableRevenueCatClient } from "./revenueCatClient";
        import { listProducts } from "@replit/revenuecat-sdk";

        async function getProducts() {
        const client = await getUncachableRevenueCatClient();
        const {data: products, error: listProductsError} = await listProducts({ client, path: { project_id: process.env.REVENUECAT_PROJECT_ID! }, query: { limit: 20 } });
        if (listProductsError) {
            console.error("Failed to list products:", listProductsError);
            return;
        }

        console.log(JSON.stringify(products.items, null, 2));
        }

        getProducts().catch(console.error);
        ```

**Important Considerations When Making Changes:**

    - If you add or update products/packages in RevenueCat, you must also update the current offering so the client (which reads `offerings.current`) sees the changes.
    - Display names for products must be unique -- ensure this when creating new products.
    - Each package allows only one product per app store
    - Access tokens expire, so always call `getUncachableRevenueCatClient()` to get a fresh client for each operation. Never cache the client.
    - Reference the documentation for the @replit/revenuecat-sdk SDK to use the RevenueCat REST API if necessary

If asked to update the price:

- Test store: Create a standalone script that:
    1. Creates new products with the updated price (use a new product identifier, e.g., append version suffix like `_v2` or price like `_999`)
    2. Attaches the new products to the "premium" entitlement
    3. Detaches the old products from the package
    4. Attaches the new products to the package
    5. **CRITICAL: Deletes the old products entirely** - The RevenueCat SDK may still resolve to old products if they exist anywhere in the project, even if they're not attached to any package. Always delete old products after creating replacements.
- Production stores: suggest that they update the price in the respective consoles (App Store Connect / Google Play Console)
