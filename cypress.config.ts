import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    allowCypressEnv: false,
    baseUrl: "https://www.github.com",
    specPattern: "tests/cypress/e2e/**/*.cy.ts",
    supportFile: "tests/cypress/support/e2e.ts",
    fixturesFolder: "tests/cypress/fixtures",
    screenshotsFolder: "tests/cypress/screenshots",
    videosFolder: "tests/cypress/videos",
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        GITHUB_PASSWORD: process.env.GITHUB_PASSWORD,
      };
      return config;
    },
  },
});
