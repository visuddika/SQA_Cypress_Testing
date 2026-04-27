const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 20000,

  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
  },
});