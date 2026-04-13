const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3mqeb5',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
