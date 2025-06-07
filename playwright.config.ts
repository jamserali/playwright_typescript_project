import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 30000,

  use: {
    headless: true,
    baseURL: 'https://pro.joistapp.com/login',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [['html', { outputFolder: 'html-report', open: 'never' }],['dot']],
});
