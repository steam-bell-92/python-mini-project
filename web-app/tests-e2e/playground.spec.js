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

  test('should trigger run code via Ctrl+Enter and clear console via Ctrl+Shift+L', async ({ page }) => {
    await page.goto('/');

    const playgroundTab = page.locator('button[data-sticky-category="playground"]');
    await expect(playgroundTab).toBeVisible();
    await playgroundTab.click();

    const statusText = page.locator('#statusText');
    await expect(statusText).toHaveText(/Pyodide Ready/, { timeout: 30000 });

    const consoleOutput = page.locator('#consoleOutput');

    // Focus editor and press Control+Enter
    const editor = page.locator('.cm-content');
    await editor.focus();
    await page.keyboard.press('Control+Enter');

    await expect(consoleOutput).toContainText('Hello, World!');

    // Press Control+Shift+L to clear console
    await page.keyboard.press('Control+Shift+L');
    await expect(consoleOutput).toContainText('Console output will appear here');
  });
});
