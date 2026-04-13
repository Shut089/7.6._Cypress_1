const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3mqeb5",
  allowCypressEnv: true,
  viewportWidth: 390,
  viewportHeight: 844,

  e2e: {
    setupNodeEvents(on, config) {},
  },
});
