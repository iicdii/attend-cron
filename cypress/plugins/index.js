/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
require('dotenv').config();

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  config.env.G_MARKET_ID = process.env.G_MARKET_ID;
  config.env.G_MARKET_PASSWORD = process.env.G_MARKET_PASSWORD;

  // do not forget to return the changed config object!
  return config
}
