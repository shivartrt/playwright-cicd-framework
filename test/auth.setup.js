import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: ' My account' }).hover();
  await page.getByRole('button', { name: ' My account' }).click();
  //await page.getByRole('link',{ name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('shivarttest@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345@');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/.*route=account\/account/);
  // Wait until the page receives the cookies.
    await page.waitForTimeout(2000); // Adjust the timeout as needed.
  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});