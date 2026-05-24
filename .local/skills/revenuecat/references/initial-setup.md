# RevenueCat Initial Setup

## Step-by-Step Implementation

Ensure prerequisites are met. Do not proceed until you have done so.

Follow these steps in order when implementing RevenueCat integration for the user. Create a task list to track implementation progress.

Do not reference the @replit/revenuecat-sdk SDK docs during initial setup unless absolutely necessary. The instructions below should be sufficient.

1. Create a seed script, using the generated `getUncachableRevenueCatClient()` function in the scripts directory to get an authenticated client, to set up RevenueCat entities (project, app, products, entitlements, offerings, etc.).
    - This seed script should be a new file that runs as a standalone script.
    - It should not be used in the API server; instead, it should be run manually.
    - This seed script should be run BEFORE implementing the client-side code for RevenueCat.

2. Run the seed script to create the entities in RevenueCat. Use the run command defined in the Project Structure section of the main skill doc.

3. After the seed script runs successfully:
    - Three public API keys will be logged: test store, app store, and play store. Store these keys in the following environment variables:
    - EXPO_PUBLIC_REVENUECAT_TEST_API_KEY
    - EXPO_PUBLIC_REVENUECAT_IOS_API_KEY
    - EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY

    - The project id, test store app id, apple app store app id, and google play store app id will also be logged. Store this in the following environment variables:
    - REVENUECAT_PROJECT_ID
    - REVENUECAT_TEST_STORE_APP_ID
    - REVENUECAT_APPLE_APP_STORE_APP_ID
    - REVENUECAT_GOOGLE_PLAY_STORE_APP_ID

4. Implement client-side logic in React Native using the `react-native-purchases` SDK to set up the purchase flow.
    - Use the public API keys obtained from the RevenueCat project created in step 3.
    - Use the entitlement identifier to check if the user has access to the feature.
    - Use the product identifier to get the product details.
    - Use the package identifier to get the package details.
    - Use the offering identifier to get the offering details.
    - To make a purchase, use `Purchases.purchasePackage` to purchase the package. When in test mode, add a confirmation dialog to confirm whether we should purchase it or not.
    - Do NOT Use Alert.alert or regular JavaScript alert to show confirmation prompts as these may not fully work. Implement custom modals if necessary.

5a. Implement the code for `lib/revenuecat.tsx` in the client app directory using the provided code snippet.

5b. Modify App.tsx (or the root layout file) as such:

  1. Import `initializeRevenueCat` and call it at the top-level of the file with a try-catch block.

     ```ts
     import { Alert } from "react-native"

     try {
      initializeRevenueCat();
     } catch (err: any) {
      Alert.alert("RevenueCat Unavailable", err?.message ?? "Unknown error");
     }
     ```

  2. Wrap the app in the `SubscriptionProvider` provider.

5c. Use the `useSubscription` hook whenever RevenueCat functionality is required.

- For paywalls or any subscription-related UI, NEVER hardcode prices, product names, or details; always derive them from the subscription context
- Example:

    ```ts
    const currentOffering = offerings?.current;
    const packageToPurchase = currentOffering?.availablePackages[0];
    const price = packageToPurchase?.product.priceString || "<fallback>";
    ```

## Code Files

Filename: seedRevenueCat.ts (in the scripts directory)

```ts
import { getUncachableRevenueCatClient } from "./revenueCatClient";

import {
  listProjects,
  createProject,
  listApps,
  createApp,
  listAppPublicApiKeys,
  listProducts,
  createProduct,
  listEntitlements,
  createEntitlement,
  attachProductsToEntitlement,
  listOfferings,
  createOffering,
  updateOffering,
  listPackages,
  createPackages,
  attachProductsToPackage,
  type App,
  type Product,
  type Project,
  type Entitlement,
  type Offering,
  type Package,
  type CreateProductData,
} from "@replit/revenuecat-sdk";

const PROJECT_NAME = "My Example App"; // REPLIT AGENT: Use the app's name as the project name

const PRODUCT_IDENTIFIER = "premium_monthly"; // REPLIT AGENT: Fill this in
const PLAY_STORE_PRODUCT_IDENTIFIER = "premium_monthly:monthly"; // REPLIT AGENT: Must follow the format: {subscriptionId}:{basePlanId}

const PRODUCT_DISPLAY_NAME = "Premium Monthly"; // REPLIT AGENT: Fill this in
const PRODUCT_USER_FACING_TITLE = "Premium Monthly"; // REPLIT AGENT: Fill this in
const PRODUCT_DURATION = "P1M"; // REPLIT AGENT: Fill in duration of product subscription; Enum: "P1W" "P1M" "P2M" "P3M" "P6M" "P1Y"

const APP_STORE_APP_NAME = "My iOS App"; // REPLIT AGENT: Fill this in
const APP_STORE_BUNDLE_ID = "com.example.ios"; // REPLIT AGENT: Fill this in
const PLAY_STORE_APP_NAME = "My Android App"; // REPLIT AGENT: Fill this in
const PLAY_STORE_PACKAGE_NAME = "com.example.android"; // REPLIT AGENT: Fill this in

const ENTITLEMENT_IDENTIFIER = "premium"; // REPLIT AGENT: Fill in the entitlement identifier
const ENTITLEMENT_DISPLAY_NAME = "Premium Access"; // REPLIT AGENT: Fill in the entitlement display name

const OFFERING_IDENTIFIER = "default"; // REPLIT AGENT: Fill this in
const OFFERING_DISPLAY_NAME = "Default Offering"; // REPLIT AGENT: Fill this in

const PACKAGE_IDENTIFIER = "$rc_monthly"; // REPLIT AGENT: Fill this in
const PACKAGE_DISPLAY_NAME = "Monthly Subscription"; // REPLIT AGENT: Fill this in

// REPLIT AGENT: Pricing configuration (amount in micros = dollars * 1,000,000)
const PRODUCT_PRICES = [
  { amount_micros: 9990000, currency: "USD" }, // $9.99
  { amount_micros: 8990000, currency: "EUR" }, // €8.99
];

type TestStorePricesResponse = {
  object: string;
  prices: { amount_micros: number; currency: string }[];
};

async function seedRevenueCat() {
  const client = await getUncachableRevenueCatClient();

  let project: Project;
  const { data: existingProjects, error: listProjectsError } = await listProjects({
    client,
    query: { limit: 20 },
  });

  if (listProjectsError) throw new Error("Failed to list projects");

  const existingProject = existingProjects.items?.find((p) => p.name === PROJECT_NAME);

  if (existingProject) {
    console.log("Project already exists:", existingProject.id);
    project = existingProject;
  } else {
    const { data: newProject, error: createProjectError } = await createProject({
      client,
      body: { name: PROJECT_NAME },
    });
    if (createProjectError) throw new Error("Failed to create project");
    console.log("Created project:", newProject.id);
    project = newProject;
  }

  const { data: apps, error: listAppsError } = await listApps({
    client,
    path: { project_id: project.id },
    query: { limit: 20 },
  });

  if (listAppsError || !apps || apps.items.length === 0) {
    throw new Error("No apps found");
  }

  let app: App | undefined = apps.items.find((a) => a.type === "test_store");
  let appStoreApp: App | undefined = apps.items.find((a) => a.type === "app_store");
  let playStoreApp: App | undefined = apps.items.find((a) => a.type === "play_store");

  if (!app) {
    throw new Error("No app with test store found");
  } else {
    console.log("App with test store found:", app.id);
  }

  if (!appStoreApp) {
    const { data: newApp, error } = await createApp({
      client,
      path: { project_id: project.id },
      body: {
        name: APP_STORE_APP_NAME,
        type: "app_store",
        app_store: { bundle_id: APP_STORE_BUNDLE_ID },
      },
    });
    if (error) throw new Error("Failed to create App Store app");
    appStoreApp = newApp;
    console.log("Created App Store app:", appStoreApp.id);
  } else {
    console.log("App Store app found:", appStoreApp.id);
  }

  if (!playStoreApp) {
    const { data: newApp, error } = await createApp({
      client,
      path: { project_id: project.id },
      body: {
        name: PLAY_STORE_APP_NAME,
        type: "play_store",
        play_store: { package_name: PLAY_STORE_PACKAGE_NAME },
      },
    });
    if (error) throw new Error("Failed to create Play Store app");
    playStoreApp = newApp;
    console.log("Created Play Store app:", playStoreApp.id);
  } else {
    console.log("Play Store app found:", playStoreApp.id);
  }

  const { data: existingProducts, error: listProductsError } = await listProducts({
    client,
    path: { project_id: project.id },
    query: { limit: 100 },
  });

  if (listProductsError) throw new Error("Failed to list products");

  const ensureProductForApp = async (targetApp: App, label: string, productIdentifier: string, isTestStore: boolean): Promise<Product> => {
    const existingProduct = existingProducts.items?.find((p) => p.store_identifier === productIdentifier && p.app_id === targetApp.id);

    if (existingProduct) {
      console.log(label + " product already exists:", existingProduct.id);
      return existingProduct;
    }

    const body: CreateProductData["body"] = {
      store_identifier: productIdentifier,
      app_id: targetApp.id,
      type: "subscription",
      display_name: PRODUCT_DISPLAY_NAME,
    };

    if (isTestStore) {
      body.subscription = { duration: PRODUCT_DURATION };
      body.title = PRODUCT_USER_FACING_TITLE;
    }

    const { data: createdProduct, error } = await createProduct({
      client,
      path: { project_id: project.id },
      body,
    });

    if (error) throw new Error("Failed to create " + label + " product");
    console.log("Created " + label + " product:", createdProduct.id);
    return createdProduct;
  };

  const testStoreProduct = await ensureProductForApp(app, "Test Store", PRODUCT_IDENTIFIER, true);
  const appStoreProduct = await ensureProductForApp(appStoreApp, "App Store", PRODUCT_IDENTIFIER, false);
  const playStoreProduct = await ensureProductForApp(playStoreApp, "Play Store", PLAY_STORE_PRODUCT_IDENTIFIER, false);

  // Add test store prices for the product using undocumented endpoint
  console.log("Adding test store prices for product:", testStoreProduct.id);
  console.log("Prices to add:", JSON.stringify(PRODUCT_PRICES, null, 2));

  const { data: priceData, error: priceError } = await client.post<TestStorePricesResponse>({
    url: "/projects/{project_id}/products/{product_id}/test_store_prices",
    path: { project_id: project.id, product_id: testStoreProduct.id },
    body: { prices: PRODUCT_PRICES },
  });

  if (priceError) {
    if (priceError && typeof priceError === "object" && "type" in priceError && priceError["type"] === "resource_already_exists") {
      console.log("Test store prices already exist for this product");
    } else {
      throw new Error("Failed to add test store prices");
    }
  } else {
    console.log("Successfully added test store prices");
    console.log("Response:", JSON.stringify(priceData, null, 2));
  }

  let entitlement: Entitlement | undefined;
  const { data: existingEntitlements, error: listEntitlementsError } = await listEntitlements({
    client,
    path: { project_id: project.id },
    query: { limit: 20 },
  });

  if (listEntitlementsError) throw new Error("Failed to list entitlements");

  const existingEntitlement = existingEntitlements.items?.find((e) => e.lookup_key === ENTITLEMENT_IDENTIFIER);

  if (existingEntitlement) {
    console.log("Entitlement already exists:", existingEntitlement.id);
    entitlement = existingEntitlement;
  } else {
    const { data: newEntitlement, error } = await createEntitlement({
      client,
      path: { project_id: project.id },
      body: {
        lookup_key: ENTITLEMENT_IDENTIFIER,
        display_name: ENTITLEMENT_DISPLAY_NAME,
      },
    });
    if (error) throw new Error("Failed to create entitlement");
    console.log("Created entitlement:", newEntitlement.id);
    entitlement = newEntitlement;
  }

  const { error: attachEntitlementError } = await attachProductsToEntitlement({
    client,
    path: { project_id: project.id, entitlement_id: entitlement.id },
    body: {
      product_ids: [testStoreProduct.id, appStoreProduct.id, playStoreProduct.id],
    },
  });

  if (attachEntitlementError) {
    if (attachEntitlementError.type === "unprocessable_entity_error") {
      console.log("Product already attached to entitlement");
    } else {
      throw new Error("Failed to attach products to entitlement");
    }
  } else {
    console.log("Attached products to entitlement");
  }

  let offering: Offering | undefined;
  const { data: existingOfferings, error: listOfferingsError } = await listOfferings({
    client,
    path: { project_id: project.id },
    query: { limit: 20 },
  });

  if (listOfferingsError) throw new Error("Failed to list offerings");

  const existingOffering = existingOfferings.items?.find((o) => o.lookup_key === OFFERING_IDENTIFIER);

  if (existingOffering) {
    console.log("Offering already exists:", existingOffering.id);
    offering = existingOffering;
  } else {
    const { data: newOffering, error } = await createOffering({
      client,
      path: { project_id: project.id },
      body: {
        lookup_key: OFFERING_IDENTIFIER,
        display_name: OFFERING_DISPLAY_NAME,
      },
    });
    if (error) throw new Error("Failed to create offering");
    console.log("Created offering:", newOffering.id);
    offering = newOffering;
  }

  if (!offering.is_current) {
    const { error } = await updateOffering({
      client,
      path: { project_id: project.id, offering_id: offering.id },
      body: { is_current: true },
    });
    if (error) throw new Error("Failed to set offering as current");
    console.log("Set offering as current");
  }

  let pkg: Package | undefined;
  const { data: existingPackages, error: listPackagesError } = await listPackages({
    client,
    path: { project_id: project.id, offering_id: offering.id },
    query: { limit: 20 },
  });

  if (listPackagesError) throw new Error("Failed to list packages");

  const existingPackage = existingPackages.items?.find((p) => p.lookup_key === PACKAGE_IDENTIFIER);

  if (existingPackage) {
    console.log("Package already exists:", existingPackage.id);
    pkg = existingPackage;
  } else {
    const { data: newPackage, error } = await createPackages({
      client,
      path: { project_id: project.id, offering_id: offering.id },
      body: {
        lookup_key: PACKAGE_IDENTIFIER,
        display_name: PACKAGE_DISPLAY_NAME,
      },
    });
    if (error) throw new Error("Failed to create package");
    console.log("Created package:", newPackage.id);
    pkg = newPackage;
  }

  const { error: attachPackageError } = await attachProductsToPackage({
    client,
    path: { project_id: project.id, package_id: pkg.id },
    body: {
      products: [
        { product_id: testStoreProduct.id, eligibility_criteria: "all" },
        { product_id: appStoreProduct.id, eligibility_criteria: "all" },
        { product_id: playStoreProduct.id, eligibility_criteria: "all" },
      ],
    },
  });

  if (attachPackageError) {
    if (attachPackageError.type === "unprocessable_entity_error" && attachPackageError.message?.includes("Cannot attach product")) {
      console.log("Skipping package attach: package already has incompatible product");
    } else {
      throw new Error("Failed to attach products to package");
    }
  } else {
    console.log("Attached products to package");
  }

  const { data: testStoreApiKeys, error: testStoreApiKeysError } = await listAppPublicApiKeys({
    client,
    path: { project_id: project.id, app_id: app.id },
  });
  if (testStoreApiKeysError) {
    throw new Error("Failed to list public API keys for Test Store app");
  }
  const { data: appStoreApiKeys, error: appStoreApiKeysError } = await listAppPublicApiKeys({
    client,
    path: { project_id: project.id, app_id: appStoreApp.id },
  });
  if (appStoreApiKeysError) {
    throw new Error("Failed to list public API keys for App Store app");
  }
  const { data: playStoreApiKeys, error: playStoreApiKeysError } = await listAppPublicApiKeys({
    client,
    path: { project_id: project.id, app_id: playStoreApp.id },
  });
  if (playStoreApiKeysError) {
    throw new Error("Failed to list public API keys for Play Store app");
  }

  console.log("\n====================");
  console.log("RevenueCat setup complete!");
  console.log("Project ID:", project.id);
  console.log("Test Store App ID:", app.id);
  console.log("App Store App ID:", appStoreApp.id);
  console.log("Play Store App ID:", playStoreApp.id);
  console.log("Test Store Product ID:", testStoreProduct.id);
  console.log("App Store Product ID:", appStoreProduct.id);
  console.log("Play Store Product ID:", playStoreProduct.id);
  console.log("Entitlement Identifier:", ENTITLEMENT_IDENTIFIER);
  console.log("Public API Keys - Test Store:", testStoreApiKeys?.items.map((item) => item.key).join(", ") ?? "N/A");
  console.log("Public API Keys - App Store:", appStoreApiKeys?.items.map((item) => item.key).join(", ") ?? "N/A");
  console.log("Public API Keys - Play Store:", playStoreApiKeys?.items.map((item) => item.key).join(", ") ?? "N/A");
  console.log("====================\n");
}

seedRevenueCat().catch(console.error);
```

Filename: lib/revenuecat.tsx (in the client app directory)

```ts
import React, { createContext, useContext } from "react";
import { Platform } from "react-native";
import Purchases from "react-native-purchases";
import { useMutation, useQuery } from "@tanstack/react-query";
import Constants from "expo-constants";

const REVENUECAT_TEST_API_KEY = process.env.EXPO_PUBLIC_REVENUECAT_TEST_API_KEY;
const REVENUECAT_IOS_API_KEY = process.env.EXPO_PUBLIC_REVENUECAT_IOS_API_KEY;
const REVENUECAT_ANDROID_API_KEY = process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY;

export const REVENUECAT_ENTITLEMENT_IDENTIFIER = ""; // REPLIT AGENT: Use the entitlement identifier obtained from the seed script. e.g. "premium"

function getRevenueCatApiKey() {
  if(!REVENUECAT_TEST_API_KEY || !REVENUECAT_IOS_API_KEY || !REVENUECAT_ANDROID_API_KEY) {
    throw new Error("RevenueCat Public API Keys not found");
  }

  if(!REVENUECAT_ENTITLEMENT_IDENTIFIER) {
    throw new Error("RevenueCat Entitlement Identifier not provided");
  }

  if (__DEV__ || Platform.OS === "web" || Constants.executionEnvironment === "storeClient") {
    return REVENUECAT_TEST_API_KEY;
  }

  if (Platform.OS === "ios") {
    return REVENUECAT_IOS_API_KEY;
  }

  if (Platform.OS === "android") {
    return REVENUECAT_ANDROID_API_KEY;
  }

  return REVENUECAT_TEST_API_KEY;
}

export function initializeRevenueCat() {
  const apiKey = getRevenueCatApiKey();
  if (!apiKey) throw new Error("RevenueCat Public API Key not found");

  Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
  Purchases.configure({ apiKey });

  console.log("Configured RevenueCat");
}

function useSubscriptionContext() {
  const customerInfoQuery = useQuery({
    queryKey: ["revenuecat", "customer-info"],
    queryFn: async () => {
      const info = await Purchases.getCustomerInfo();
      return info;
    },
    staleTime: 60 * 1000,
  });

  const offeringsQuery = useQuery({
    queryKey: ["revenuecat", "offerings"],
    queryFn: async () => {
      const offerings = await Purchases.getOfferings();
      return offerings;
    },
    staleTime: 300 * 1000,
  });

  const purchaseMutation = useMutation({
    mutationFn: async (packageToPurchase: any) => {
      const { customerInfo } = await Purchases.purchasePackage(packageToPurchase);
      return customerInfo;
    },
    onSuccess: () => customerInfoQuery.refetch(),
  });

  const restoreMutation = useMutation({
    mutationFn: async () => {
      return Purchases.restorePurchases();
    },
    onSuccess: () => customerInfoQuery.refetch(),
  });

  const isSubscribed = customerInfoQuery.data?.entitlements.active?.[REVENUECAT_ENTITLEMENT_IDENTIFIER] !== undefined;

  return {
    customerInfo: customerInfoQuery.data,
    offerings: offeringsQuery.data,
    isSubscribed,
    isLoading: customerInfoQuery.isLoading || offeringsQuery.isLoading,
    purchase: purchaseMutation.mutateAsync,
    restore: restoreMutation.mutateAsync,
    isPurchasing: purchaseMutation.isPending,
    isRestoring: restoreMutation.isPending,
  };
}

type SubscriptionContextValue = ReturnType<typeof useSubscriptionContext>;
const Context = createContext<SubscriptionContextValue | null>(null);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const value = useSubscriptionContext();
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useSubscription() {
  const ctx = useContext(Context);
  if (!ctx) {
    throw new Error("useSubscription must be used within a SubscriptionProvider");
  }
  return ctx;
}
```
