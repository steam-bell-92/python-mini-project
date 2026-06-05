const { test, expect } = require('@playwright/test');

test.describe('Modal Lifecycle & Focus Trapping', () => {
  test('should open modal, trap keyboard focus, close modal, and restore focus to trigger button', async ({ page }) => {
    await page.goto('/');

    // Scroll to projects to show cards
    const exploreBtn = page.locator('#exploreBtn');
    await exploreBtn.click();

    // Wait for sidebar to be active
    await expect(page.locator('body')).toHaveClass(/sidebar-active/);

    // Get the first project card's "Try It" button
    const firstCardPlayBtn = page.locator('.project-card .btn-play').first();
    await expect(firstCardPlayBtn).toBeVisible();

    // Focus and click the play button
    await firstCardPlayBtn.focus();
    await firstCardPlayBtn.click();

    const modal = page.locator('#projectModal');
    // Verify modal has active class
    await expect(modal).toHaveClass(/active/);

    // Selector for focusable elements
    const focusableSelector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    // Get focusable element tags/ids/classes inside modal to compare
    const focusablesInModal = await modal.evaluate((modalEl, sel) => {
      return Array.from(modalEl.querySelectorAll(sel))
        .filter(el => !el.closest('[aria-hidden="true"]') && !el.classList.contains("visually-hidden"))
        .map(el => el.tagName + (el.id ? '#' + el.id : '') + (el.className ? '.' + el.className.split(' ').join('.') : ''));
    }, focusableSelector);

    expect(focusablesInModal.length).toBeGreaterThan(0);

    // 1. Manually focus the first focusable element inside the modal
    await modal.evaluate((modalEl, sel) => {
      const focusables = Array.from(modalEl.querySelectorAll(sel))
        .filter(el => !el.closest('[aria-hidden="true"]') && !el.classList.contains("visually-hidden"));
      focusables[0].focus();
    }, focusableSelector);

    // 2. Press Shift+Tab. Focus should wrap around to the last focusable element in the modal.
    await page.keyboard.press('Shift+Tab');
    
    let activeTag = await page.evaluate(() => {
      const el = document.activeElement;
      return el.tagName + (el.id ? '#' + el.id : '') + (el.className ? '.' + el.className.split(' ').join('.') : '');
    });
    const lastTagName = focusablesInModal[focusablesInModal.length - 1];
    expect(activeTag).toBe(lastTagName);

    // 3. Press Tab. Focus should wrap back to the first focusable element in the modal.
    await page.keyboard.press('Tab');
    
    activeTag = await page.evaluate(() => {
      const el = document.activeElement;
      return el.tagName + (el.id ? '#' + el.id : '') + (el.className ? '.' + el.className.split(' ').join('.') : '');
    });
    const firstTagName = focusablesInModal[0];
    expect(activeTag).toBe(firstTagName);

    // 4. Close the modal by pressing Escape
    await page.keyboard.press('Escape');

    // Verify modal is closed (no longer has active class)
    await expect(modal).not.toHaveClass(/active/);

    // Verify focus is restored to the original play button
    const isPlayBtnFocused = await firstCardPlayBtn.evaluate(el => el === document.activeElement);
    expect(isPlayBtnFocused).toBe(true);
  });
});
