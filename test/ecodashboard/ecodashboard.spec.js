import {test, expect} from '@playwright/test';
import { ecodashboardlocator } from './ecodashboard_locator';
import { ecobash_data } from './ecodashboardtestdata';
//test
test.describe('Login test suite @ecomdash', () => {
  test.use({ storageState: 'playwright/.auth/user.json' });
  test.only('validate user able to edit the fname &lname  ', async ({ page }) => {
      await test.step('Navigate to login page', async () => {
      await page.goto(ecobash_data.login_pageurl);
      await page.pause();
    });
    await test.step('And click on edit my account', async () => {
    await page.getByRole('link', { name: ecodashboardlocator.my_account_locator }).click();
    
    });

 await test.step('And i click to edit fname', async () => {
    await page.locator(ecodashboardlocator.firstname_locator).click();
    await page.locator(ecodashboardlocator.firstname_locator).fill(ecobash_data.firstname);
    await page.locator(ecodashboardlocator.lastname_locator).click();
    await page.locator(ecodashboardlocator.lastname_locator).fill(ecobash_data.lastname);
    await page.locator(ecodashboardlocator.email_locator).click();  
    await page.locator(ecodashboardlocator.email_locator).fill(ecobash_data.email);
    await page.locator(ecodashboardlocator.telephone_locator).click();
    await page.locator(ecodashboardlocator.telephone_locator).fill(ecobash_data.telephone);
    await page.locator(ecodashboardlocator.submit_locator).click();
    await expect(page.getByText(ecodashboardlocator.account_updated)).toBeVisible();  
  });
   });
  });
  