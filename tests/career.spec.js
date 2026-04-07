const { test, expect } = require('@playwright/test');

const mockJobsData = {
  success: true,
  data: [
    {
      title: 'Backend Developer',
      slug: 'backend-developer',
      location: 'Jakarta, Indonesia',
      thumbnail_url: '',
      closing_date: '2026-12-31T23:59:59.000000Z',
    },
    {
      title: 'Frontend Developer',
      slug: 'frontend-developer',
      location: 'Cirebon, Indonesia',
      thumbnail_url: '',
      closing_date: '2026-11-30T23:59:59.000000Z',
    }
  ],
};

const mockJobDetailData = {
  success: true,
  data: {
    title: 'Backend Developer',
    slug: 'backend-developer',
    location: 'Jakarta, Indonesia',
    description: 'Bekerja membangun API.',
    requirements: 'Paham Node.js dan Go.',
    closing_date: '2026-12-31T23:59:59.000000Z',
    application_form: [
      { name: 'full_name', label: 'Nama Lengkap', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
    ],
  },
};

const mockApplySuccessData = {
  success: true,
  data: {
    job_slug: 'backend-developer',
    applicant_name: 'Test Playwright User',
    status: 'in_progress'
  }
};

test.describe('Career Page Jobs Flow', () => {

  test('Should render jobs from API and open dedicated apply page correctly', async ({ page }) => {
    await page.addInitScript(() => {
      window.__OCEANSPACE_FORCE_NETWORK_JOBS__ = true;
    });

    // Intercept Job Listings API
    await page.route('**/api/jobs', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockJobsData),
      });
    });

    // Intercept Job Detail API
    await page.route('**/api/jobs/backend-developer', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockJobDetailData),
      });
    });

    await page.goto('/career.html');

    // Wait until 'Backend Developer' is rendered in the list
    const jobCard = page.locator('h3:has-text("Backend Developer")');
    await expect(jobCard).toBeVisible();

    // Verify Frontend Developer (the other mocked data) also displayed
    await expect(page.locator('h3:has-text("Frontend Developer")')).toBeVisible();

    // Click dedicated apply page link
    const openBtn = page.locator('[data-job-link="backend-developer"]');
    await openBtn.click();
    await expect(page).toHaveURL(/.*career-apply\.html\?job=backend-developer/);

    // Wait for the dedicated page to render the correct title
    await expect(page.locator('#apply-page-title')).toContainText('Backend Developer');

    // Ensure the dynamic form rendered the Full Name and Email fields correctly on the page
    const fullNameInput = page.locator('input[name="full_name"]');
    const emailInput = page.locator('input[name="email"]');
    await expect(fullNameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
  });

  test('Should submit the application form gracefully on dedicated page', async ({ page }) => {
    await page.addInitScript(() => {
      window.__OCEANSPACE_FORCE_NETWORK_JOBS__ = true;
    });

    await page.route('**/api/jobs/backend-developer', async route => route.fulfill({ json: mockJobDetailData }));

    // Intercept Apply API
    await page.route('**/api/jobs/backend-developer/apply', async route => {
      // Small artificial delay to let UI show "Memproses..."
      await new Promise(r => setTimeout(r, 500));
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify(mockApplySuccessData),
      });
    });

    await page.goto('/career-apply.html?job=backend-developer');

    // Wait for inputs
    const fullNameInput = page.locator('input[name="full_name"]');
    await expect(fullNameInput).toBeVisible();

    // Fill the inputs
    await fullNameInput.fill('Test Playwright User');
    await page.locator('input[name="email"]').fill('playwright@test.com');

    // Submit form
    const submitBtn = page.locator('#btn-submit');
    await submitBtn.click();

    // Wait for "Memproses..." state to disappear and success screen to show
    const successHeader = page.locator('h3:has-text("Lamaran Berhasil Terkirim!")');
    await expect(successHeader).toBeVisible();
    await expect(page.locator('#apply-form a:has-text("Hubungi tim korporat")')).toBeVisible();
  });

  test('Should show 422 error gracefully on dedicated page', async ({ page }) => {
    await page.addInitScript(() => {
      window.__OCEANSPACE_FORCE_NETWORK_JOBS__ = true;
    });

    await page.route('**/api/jobs/backend-developer', async route => route.fulfill({ json: mockJobDetailData }));

    // Intercept Apply with 422
    await page.route('**/api/jobs/backend-developer/apply', async route => {
      await route.fulfill({
        status: 422,
        contentType: 'application/json',
        body: JSON.stringify({
          message: "The email field is required.",
          errors: {
            email: ["The email field is required."]
          }
        }),
      });
    });

    await page.goto('/career-apply.html?job=backend-developer');
    
    // Fill full name but leave email empty
    await page.locator('input[name="full_name"]').fill('Test Error User');
    await page.evaluate(() => { document.querySelector('#apply-form').noValidate = true; });

    await page.locator('#btn-submit').click();

    // Verify that the error message shows up next to email or atop form
    const alertMsg = page.locator('#form-alerts');
    await expect(alertMsg).toBeVisible();
    await expect(alertMsg).toContainText('The email field is required.');

    const emailError = page.locator('#error-email');
    await expect(emailError).toBeVisible();
    await expect(emailError).toHaveText("The email field is required.");
  });
});
