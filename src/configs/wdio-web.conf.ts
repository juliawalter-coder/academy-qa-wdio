import { sharedConfig } from './wdio-shared.conf';
import * as async_hooks from 'node:async_hooks';

export const config = {
  ...sharedConfig,

  // Change location spec files
  specs: ['../tests/web/herokuapp/*.spec.ts'],
  // Run the code in parallel
  maxInstances: 10,
  capabilities: [
    { browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--disable-gpu', '--no-sandbox'],
      },
      //browserName: 'firefox',
      //'moz:firefoxOptions': {
      //args: ['-headless'],
      //},
      //browserName: 'msedge',
      //'ms:edgeOptions': {
      //args: ['--headless'],
      //},
      //browserName: 'safari technology preview',
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://the-internet.herokuapp.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['visual'],
  framework: 'mocha',
  // Test reporter
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  // Hooks
  beforeTest: async function (test, context) {
    await browser.maximizeWindow();
  },
};
