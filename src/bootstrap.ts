const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

let browser, page;

// TODO: change to config
let width = 1440;
let height = 900;

// puppeteer options
const opts = {
    headless: false,
    slowMo: 100,
    args: ['--start-maximized', `--window-size=${width},${height}`]
};

// expose variables
before(async function () {
    global.expect = expect;
    global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after(function () {
    // don't close for now
    // global.browser.close();

    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
});