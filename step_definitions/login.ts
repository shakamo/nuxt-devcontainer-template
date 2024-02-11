import { After, Before, Given, Then, When } from '@cucumber/cucumber';
import { Page, chromium } from '@playwright/test';
import LoginPage from '../pages/loginPage';

let page: Page;
let loginPage: LoginPage;

Before(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
});

After(async () => {
    await page.close();
});

Given('{string} へアクセスし、ログイン画面を表示する', async (url: string) => {
    loginPage.表示する(url);
});

When('{string} と {string} を入力する', async (email: string, password: string) => {
    await loginPage.入力する(email, password);
});

When('ログインボタンをクリックし {string} へアクセスする', async (url: string) => {
    await loginPage.ログインする(url);
});

Then('ログイン後の画面が表示されること', async () => {
    await loginPage.ログインできたかどうか確認する();
});