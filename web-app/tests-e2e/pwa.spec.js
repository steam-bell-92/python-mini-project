const { test, expect } = require('@playwright/test');

test.describe('PWA Capability and Offline Support', () => {
  test('should reference manifest.json and register service worker', async ({ page }) => {
    await page.goto('/');

    // Check manifest link exists in head
    const manifestLink = page.locator('link[rel="manifest"]');
    await expect(manifestLink).toHaveAttribute('href', 'manifest.json');

    // Fetch manifest file to verify its structure
    const response = await page.goto('/manifest.json');
    expect(response.status()).toBe(200);
    const manifest = await response.json();
    expect(manifest.name).toBe('Python Mini Projects');
    expect(manifest.start_url).toBe('./index.html');
    expect(manifest.display).toBe('standalone');

    // Fetch service-worker.js to verify it exists
    const swResponse = await page.goto('/service-worker.js');
    expect(swResponse.status()).toBe(200);
  });
});
