import { test, expect } from '@playwright/test';

test.describe('Responsive Layout', () => {
  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /open menu/i });
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    const closeButton = page.getByRole('button', { name: /close menu/i });
    await expect(closeButton).toBeVisible();

    await closeButton.click();
    await expect(page.getByRole('button', { name: /open menu/i })).toBeVisible();
  });

  test('mobile navigation links work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    await page.getByRole('button', { name: /open menu/i }).click();
    await page.getByRole('link', { name: 'Services' }).first().click();
    await expect(page).toHaveURL('/services');
  });

  test('desktop nav is visible on large screens', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const mobileButton = page.getByRole('button', { name: /open menu/i });
    await expect(mobileButton).not.toBeVisible();

    for (const label of ['Home', 'About Us', 'Services', 'Projects', 'Team']) {
      await expect(page.getByRole('link', { name: label }).first()).toBeVisible();
    }
  });

  test('pages render correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    const routes = ['/', '/history', '/services', '/projects', '/team'];
    for (const route of routes) {
      await page.goto(route);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }
  });
});
