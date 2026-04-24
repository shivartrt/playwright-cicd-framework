import {test, expect} from '@playwright/test';
import { ecologinlocator } from './ecologin_locator';
import { ecologin_data } from './ecologintestdata';

 test.describe('Login test suite @ecom', () => {
  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to login page', async () => {
      await page.goto(ecologin_data.login_pageurl);
      await page.pause();
    });
    await test.step('And i hover on My account', async () => {
    await page.getByRole('button', { name: ' My account' }).click();
    });
 await test.step('And i click on My account', async () => {
    await page.getByRole('link',{ name: ecologinlocator.login_locator, exact: true }).click();
  });
   });


  test('Login with valid credentials ', async ({ page }) => {


    await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(ecologin_data.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(ecologin_data.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(ecologin_data.user_loggedin_successfully_url);
  });
});
  