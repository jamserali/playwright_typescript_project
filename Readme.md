Playwright Test Automation Suite (Login & Estimate)
This project uses Playwright with TypeScript to automate testing for login functionality and estimate creation.

Project Structure
tests/ test_login.spec.ts # Main test file (login + estimate) pages/ loginPage.ts # LoginPage class (UI actions & assertions) estimatePage.ts # EstimatePage class (Estimate form actions) data/ testData.ts # Test data for users and estimates playwright.config.ts # Playwright configuration package.json # Project dependencies tsconfig.json # TypeScript configuration

The test runs with two data sets:

valid_user: Should login and create an estimate
invalid_user: Should show error on failed login
Setup & Installation
Clone the repository:

git clone (https://github.com/jamserali/playwright_typescript_project.git)
checkout develop

Run Tests
=========
npx playwright test