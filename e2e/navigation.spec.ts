import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('homepage loads with hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/BAi/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByLabel('Hero carousel').getByText('Since 1935')).toBeVisible();
  });

  test('nav links navigate to correct pages', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'About Us' }).first().click();
    await expect(page).toHaveURL('/history');
    await expect(page.getByText('Our Heritage')).toBeVisible();

    await page.getByRole('link', { name: 'Services' }).first().click();
    await expect(page).toHaveURL('/services');
    await expect(page.getByText('What We Do')).toBeVisible();

    await page.getByRole('link', { name: 'Projects' }).first().click();
    await expect(page).toHaveURL('/projects');
    await expect(page.getByText('Our Work')).toBeVisible();

    await page.getByRole('link', { name: 'Team' }).first().click();
    await expect(page).toHaveURL('/team');
    await expect(page.getByText('Our People')).toBeVisible();

    await page.getByRole('link', { name: 'Home' }).first().click();
    await expect(page).toHaveURL('/');
  });

  test('logo navigates to home', async ({ page }) => {
    await page.goto('/services');
    await page.getByRole('link', { name: /BAi Home/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('all pages return 200 status', async ({ page }) => {
    const routes = ['/', '/history', '/services', '/projects', '/team'];
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
    }
  });
});

test.describe('Project Detail Navigation', () => {
  test('project cards link to detail pages', async ({ page }) => {
    await page.goto('/projects');
    const firstCard = page.locator('a[href^="/projects/"]').first();
    const href = await firstCard.getAttribute('href');
    await firstCard.click();
    await expect(page).toHaveURL(href!);
    await expect(page.getByText('All Projects')).toBeVisible();
  });

  test('project detail pages load for all categories', async ({ page }) => {
    const categories = [
      'sports', 'collegiate', 'k12', 'religious', 'performing-arts',
      'convention', 'corporate-gov', 'healthcare', 'museums', 'studios',
    ];
    for (const cat of categories) {
      const response = await page.goto(`/projects/${cat}`);
      expect(response?.status()).toBe(200);
      await expect(page.getByText('All Projects')).toBeVisible();
      await expect(page.getByText('Contact Us')).toBeVisible();
    }
  });

  test('back link returns to projects page', async ({ page }) => {
    await page.goto('/projects/sports');
    await page.getByText('All Projects').click();
    await expect(page).toHaveURL('/projects');
  });

  test('invalid project category returns 404', async ({ page }) => {
    const response = await page.goto('/projects/nonexistent');
    expect(response?.status()).toBe(404);
  });
});
