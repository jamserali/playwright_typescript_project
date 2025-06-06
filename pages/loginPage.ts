import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.locator("//input[@name='email']").fill(username);
    await this.page.locator("//input[@name='password']").fill(password);
    await this.page.locator("//button[text()='Sign In']").click();
  }

  async getErrorMessage(): Promise<string> {
    const errorMsg = await this.page.locator("//div[@id='modal-root']//h3[text()='Error Logging In']").textContent();
    await this.page.locator('//div[@id="modal-root"]//button[@type="button"]').click();
    return errorMsg || "";
  }
}


