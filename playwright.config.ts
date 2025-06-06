import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: 'https://pro.joistapp.com/login',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
