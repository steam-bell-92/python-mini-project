const { test, expect } = require('@playwright/test');

test.describe('Theme Toggle', () => {
  test('should switch to light/dark mode and confirm correct data-theme attribute and color variables exist', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    
    // Default theme is dark
    await expect(html).toHaveAttribute('data-theme', 'dark');

    // Verify initial dark variables
    let bg = await html.evaluate(el => window.getComputedStyle(el).getPropertyValue('--bg').trim());
    let text = await html.evaluate(el => window.getComputedStyle(el).getPropertyValue('--text').trim());
    expect(bg).toBe('#0c0f1a');
    expect(text).toBe('#f0f2f5');

    // Scroll to projects to show the sidebar theme toggle
    await page.locator('#exploreBtn').click();

    // Wait for sidebar to be active
    await expect(page.locator('body')).toHaveClass(/sidebar-active/);

    // Target the visible theme toggle in the sidebar
    const themeToggle = page.locator('.sidebar-dock #themeToggle');
    await expect(themeToggle).toBeVisible();
    await themeToggle.click();

    // Verify theme changed to light
    await expect(html).toHaveAttribute('data-theme', 'light');

    // Verify light variables
    bg = await html.evaluate(el => window.getComputedStyle(el).getPropertyValue('--bg').trim());
    text = await html.evaluate(el => window.getComputedStyle(el).getPropertyValue('--text').trim());
    expect(bg).toBe('#f4f6f9');
    expect(text).toBe('#0f172a');

    // Click theme toggle again to switch back to dark mode
    await themeToggle.click();

    // Verify theme changed back to dark
    await expect(html).toHaveAttribute('data-theme', 'dark');
    bg = await html.evaluate(el => window.getComputedStyle(el).getPropertyValue('--bg').trim());
    text = await html.evaluate(el => window.getComputedStyle(el).getPropertyValue('--text').trim());
    expect(bg).toBe('#0c0f1a');
    expect(text).toBe('#f0f2f5');
  });
});
