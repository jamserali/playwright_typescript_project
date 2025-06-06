import { Page } from '@playwright/test';

export class EstimatePage {
  constructor(private page: Page) {}

  async addNewEstimate(desc: string, rate: string, qty: string) {
    await this.page.locator("//*[text()='Estimates']").click();
    await this.page.locator("//div[@data-component-name='document-list-header']//a//*[text()='Estimate']").click();
    await this.page.locator("//span[text()='Add Line Item']").click();
    await this.page.locator("//div[@class='LineItemEditHeader_values__Dinfv']//input[@placeholder='Description']").fill(desc);
    await this.page.locator("(//div[@class='LineItemEditHeader_values__Dinfv']//input[@inputmode='numeric'])[1]").fill(rate);
    await this.page.locator("//div[@class='LineItemEditHeader_values__Dinfv']//input[@placeholder='Quantity']").fill(qty);
    await this.page.locator("//button[@type='submit']//*[text()='Save']").click();
  }

 async verifyCompanyTitle(): Promise<string> {
  const locator = this.page.locator("//*[text()='Acme Co.']");
  // await expect(locator).toHaveCountGreaterThan(1, { timeout: 30000 }); // Optional safety
  return await locator.nth(1).textContent() || "";
}


}
