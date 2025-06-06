
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { EstimatePage } from '../pages/estimatePage';
import { LOGIN_DATA, TEST_DATA } from '../data/testData';

for (const login_type of ["valid_user", "invalid_user"] as const) {
  test(`verify add new estimate - ${login_type}`, async ({ page }) => {
    await page.goto(TEST_DATA["url"]);

    const loginPage = new LoginPage(page);
    const data = LOGIN_DATA[login_type];

    await loginPage.login(data.username, data.password);

    if (login_type === "valid_user") {
      await expect(page).toHaveURL(data["expected_url"]);
      const estimatePage = new EstimatePage(page);
      await estimatePage.addNewEstimate(TEST_DATA.description, TEST_DATA.rate, TEST_DATA.quantity);
      // const companyTitle = await estimatePage.verifyCompanyTitle();
      // expect(companyTitle).toBe("Acme Co.");
    } else {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toBe(data["expected_error"]);
    }
  });

  
}
