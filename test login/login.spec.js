import {test, expect} from '@playwright/test';
import { loginlocator } from './login_locator';
import { login_data } from './logintestdata';

 test.describe('Login test suite @smoke', () => {
test('Login with valid credentials ', async ({ page }) => {
  let i = 1;
  for(const {username, password} of login_data.username_password_data){
    await page.goto(login_data.login_pageurl);
    await page.locator(loginlocator.username_locator).fill(username);
    await page.locator(loginlocator.password_locator).fill(password);
    await page.locator(loginlocator.submit_locator).click();
    await expect(page).toHaveURL(login_data.user_loggedin_successfully_url);
    await expect(page).toHaveURL(login_data.user_not_loggedin_successfully_url);
  }
   });
});