const { test, expect } = require('@playwright/test');

test.describe('Python Playground', () => {
  test('should load Pyodide, execute default code, and show output in console', async ({ page }) => {
    // 1. Navigate to homepage
    await page.goto('/');

    // 2. Click the Playground tab in the sticky filter bar
    const playgroundTab = page.locator('button[data-sticky-category="playground"]');
    await expect(playgroundTab).toBeVisible();
    await playgroundTab.click();

    // Verify playground section is displayed
    const playgroundSection = page.locator('#playgroundSection');
    await expect(playgroundSection).toBeVisible();

    // 3. Wait for Pyodide load completion (wait up to 30 seconds for external download)
    const statusText = page.locator('#statusText');
    await expect(statusText).toHaveText(/Pyodide Ready/, { timeout: 30000 });

    // Verify run code button is enabled
    const runBtn = page.locator('#runCode');
    await expect(runBtn).toBeEnabled();

    // 4. Click the run code button
    await runBtn.click();

    // 5. Verify output console shows "Hello, World!"
    const consoleOutput = page.locator('#consoleOutput');
    await expect(consoleOutput).toContainText('Hello, World!');
  });
});
