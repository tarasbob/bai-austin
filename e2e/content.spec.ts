import { test, expect } from '@playwright/test';

test.describe('Content Integrity', () => {
  test('homepage has all required sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=About BAi').first()).toBeVisible();
    await expect(page.locator('text=What We Do').first()).toBeVisible();
    await expect(page.locator('text=Get In Touch').first()).toBeVisible();
    await expect(page.locator('text=Shaping Sound').first()).toBeVisible();
  });

  test('history page has all content sections', async ({ page }) => {
    await page.goto('/history');
    await expect(page.locator('text=Our Heritage').first()).toBeVisible();
    await expect(page.locator('text=/underwater sound defense/i').first()).toBeVisible();
    await expect(page.getByText('Charles R. Boner')).toBeVisible();
    await expect(page.getByText('Richard E. Boner')).toBeVisible();
    await expect(page.locator('text=Memberships').first()).toBeVisible();
  });

  test('services page has all 5 services', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByRole('heading', { name: 'Room Acoustics' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sound Isolation' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Noise Control' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sound Reinforcement System' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Audio Visual Systems' })).toBeVisible();
  });

  test('projects page has all 10 categories', async ({ page }) => {
    await page.goto('/projects');
    const categories = [
      'Sports, Leisure & Recreation', 'Collegiate', 'K-12', 'Religious',
      'Performing Arts', 'Convention Facilities', 'Corporate & Government',
      'Healthcare', 'Museums', 'Studios',
    ];
    for (const cat of categories) {
      await expect(page.getByRole('heading', { name: cat, exact: true })).toBeVisible();
    }
  });

  test('team page has all 5 members', async ({ page }) => {
    await page.goto('/team');
    const members = [
      'Richard Boner', 'Andy Miller', 'Bill Hammon', 'Rob Lee', 'Anthony Hardey',
    ];
    for (const name of members) {
      await expect(page.getByRole('heading', { name }).first()).toBeVisible();
    }
  });

  test('footer has office locations', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.getByText('512.476.3464')).toBeVisible();
    await expect(footer.getByText('info@baiaustin.com')).toBeVisible();
  });

  test('sports projects detail page has project content', async ({ page }) => {
    await page.goto('/projects/sports');
    await expect(page.getByText('College World Series of Omaha')).toBeVisible();
    await expect(page.getByText('TD Ameritrade Park', { exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'College Park Center' })).toBeVisible();
  });
});
