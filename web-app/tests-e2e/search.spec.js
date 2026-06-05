const { test, expect } = require('@playwright/test');

test.describe('Search & Filter', () => {
  test('should show autocomplete suggestions on typing and filter cards by category', async ({ page }) => {
    await page.goto('/');

    // Scroll to projects to show the sidebar search
    const exploreBtn = page.locator('#exploreBtn');
    await exploreBtn.click();

    // Wait for sidebar to be active
    await expect(page.locator('body')).toHaveClass(/sidebar-active/);

    const searchInput = page.locator('#searchInput');
    const searchDropdown = page.locator('#searchDropdown');
    const resultsList = page.locator('#resultsList');

    // Wait for the search input to become visible
    await expect(searchInput).toBeVisible();

    // 1. Focus search input and type query
    await searchInput.focus();
    await searchInput.fill('2048');

    // Verify autocomplete dropdown is active and shows matching suggestions
    await expect(searchDropdown).toHaveClass(/active/);
    const suggestionText = resultsList.locator('.dropdown-item-text');
    await expect(suggestionText).toContainText('2048');

    // Clear search input to restore all cards
    await searchInput.fill('');
    await page.keyboard.press('Enter');

    // 2. Click category tab "games" from sidebar
    const gamesTab = page.locator('.sidebar-tab[data-category="games"]');
    await gamesTab.click();

    // Verify that the games tab has the active class
    await expect(gamesTab).toHaveClass(/active/);

    // Verify only games category cards are displayed, and others are hidden
    const projectCards = page.locator('.project-card');
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const card = projectCards.nth(i);
      const isVisible = await card.isVisible();
      if (isVisible) {
        await expect(card).toHaveAttribute('data-category', 'games');
      } else {
        const category = await card.getAttribute('data-category');
        expect(category).not.toBe('games');
      }
    }
  });
});
