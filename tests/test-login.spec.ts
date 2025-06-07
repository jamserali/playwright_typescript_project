import { EstimatePage } from '../pages/estimatePage';
import { TEST_DATA } from '../data/testData';
const {test ,expect} = require("./my-setup")

test("estimate test", async({webApp})=>{
  const estimatePage = new EstimatePage(webApp);
      await estimatePage.addNewEstimate(TEST_DATA.description, TEST_DATA.rate, TEST_DATA.quantity);
      // const companyTitle = await estimatePage.verifyCompanyTitle();
      // expect(companyTitle).toBe("Acme Co.");
})