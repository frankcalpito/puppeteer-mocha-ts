import { IUser } from "./typings/user";

process.env.TS_NODE_PROJECT = '../tsconfig.json';
process.env.TS_CONFIG_PATHS = 'true';

// const expect = require('chai');
const puppeteer = require('puppeteer');

let browser
let page

declare global {
// eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable<Subject> {
            login(username?: string, password?: string): void;
            cogType(params: IUser): void;
            requestLogin(username?: string, password?: string): void;
        }
    }
}

export {};