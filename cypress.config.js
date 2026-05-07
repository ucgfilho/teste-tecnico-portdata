const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://www.github.com',
    specPattern: 'tests/cypress/e2e/**/*.cy.js',
    supportFile: 'tests/cypress/support/e2e.js',
    fixturesFolder: 'tests/cypress/fixtures',
    screenshotsFolder: 'tests/cypress/screenshots',
    videosFolder: 'tests/cypress/videos',
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        GITHUB_PASSWORD: process.env.GITHUB_PASSWORD,
        REPO_NAME: process.env.REPO_NAME || 'portdata-repo-teste',
      };
      return config;
    },
  },
});
