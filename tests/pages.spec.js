const { test, expect } = require('@playwright/test');

const pages = [
  { url: '/index.html', title: 'Ocean Space' },
  { url: '/about.html', title: 'Tentang' },
  { url: '/distribusi.html', title: 'Distribusi' },
  { url: '/retail.html', title: 'Retail' },
  { url: '/sub-retail.html', title: 'Sub Retail' },
  { url: '/lifestyle.html', title: 'Lifestyle' },
  { url: '/career.html', title: 'Karier' },
  { url: '/career-apply.html', title: 'Lamaran' },
  { url: '/contact.html', title: 'Kontak' },
];

test.describe('Pages Render Integrity', () => {
  for (const pageInfo of pages) {
    test(`Should load ${pageInfo.url} without errors`, async ({ page }) => {
      const response = await page.goto(pageInfo.url);
      expect(response.status()).toBe(200);

      // Verify the title contains the expected keyword
      const pageTitle = await page.title();
      expect(pageTitle.toLowerCase()).toContain(pageInfo.title.toLowerCase());

      // Ensure footer is visible (means page rendered completely)
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  }

  test('Career apply page should be non-indexable', async ({ page }) => {
    await page.goto('/career-apply.html');

    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex,\s*follow/i);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://oceanspace.co.id/career');
  });
});
