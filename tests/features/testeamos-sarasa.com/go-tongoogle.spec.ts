import { test, expect } from '@playwright/test';

test('Go to google.com and then search for claude', async ({ page }) => {
  const googlePage = new GooglePage(page);
  
  await googlePage.navigateToGoogle();
  await googlePage.search('claude');
});