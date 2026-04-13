const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3mqeb5",
  allowCypressEnv: true,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {},
  },
});
