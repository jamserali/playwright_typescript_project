
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LOGIN_DATA, TEST_DATA } from '../data/testData';

exports.expect=expect
exports.test = test.extend({
webApp:async ({page},use)=>{
  for (const login_type of ["valid_user", "invalid_user"] ) {
    await page.goto(TEST_DATA["url"]);
    const loginPage = new LoginPage(page);
    const data = LOGIN_DATA[login_type];
    await loginPage.login(data.username, data.password);

    if (login_type === "valid_user") {
      await expect(page).toHaveURL(data["expected_url"]);
    }
    else {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toBe(data["expected_error"]);
    }
    await use (page)
}}})