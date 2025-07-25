import { test, expect } from '@playwright/test';

test('Search "sarasa" in google.com and verify the first 3 results contain the word', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('[name="q"]', 'sarasa');
  await page.press('[name="q"]', 'Enter');
  await page.waitForNavigation();
  for (let i = 1; i <= 3; i++) {
    const result = await page.textContent(`:nth-match(div[data-testid="search-result"], ${i})`);
    expect(result).toContain('sarasa');
  }
});