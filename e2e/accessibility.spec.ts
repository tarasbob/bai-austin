import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('pages have proper heading hierarchy', async ({ page }) => {
    const routes = ['/', '/history', '/services', '/projects', '/team'];
    for (const route of routes) {
      await page.goto(route);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    }
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('nav links are keyboard accessible', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('carousel has accessible controls', async ({ page }) => {
    await page.goto('/');
    const prevButton = page.getByRole('button', { name: /previous slide/i });
    const nextButton = page.getByRole('button', { name: /next slide/i });
    await expect(prevButton).toBeVisible();
    await expect(nextButton).toBeVisible();

    const dots = page.getByRole('button', { name: /go to slide/i });
    const dotCount = await dots.count();
    expect(dotCount).toBe(4);
  });

  test('social links have aria labels', async ({ page }) => {
    await page.goto('/');
    const socialLinks = page.locator('footer a[aria-label]');
    const count = await socialLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('contact email links are properly formed', async ({ page }) => {
    await page.goto('/');
    const mailtoLinks = page.locator('a[href^="mailto:"]');
    const count = await mailtoLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('page has proper lang attribute', async ({ page }) => {
    await page.goto('/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en');
  });

  test('project detail pages have back navigation', async ({ page }) => {
    await page.goto('/projects/sports');
    const backLink = page.getByRole('link', { name: /All Projects/i });
    await expect(backLink).toBeVisible();
    expect(await backLink.getAttribute('href')).toBe('/projects');
  });
});

test.describe('Hero Carousel', () => {
  test('carousel shows slide content', async ({ page }) => {
    await page.goto('/');
    const hero = page.getByLabel('Hero carousel');
    await expect(hero.getByText('BAi')).toBeVisible();
    await expect(
      hero.getByText('Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems')
    ).toBeVisible();
  });

  test('carousel navigation arrows work', async ({ page }) => {
    await page.goto('/');
    const nextButton = page.getByRole('button', { name: /next slide/i });
    await nextButton.click();
    await page.waitForTimeout(600);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('carousel dot indicators work', async ({ page }) => {
    await page.goto('/');
    const dots = page.getByRole('button', { name: /go to slide/i });
    await dots.nth(2).click();
    await page.waitForTimeout(600);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
});
