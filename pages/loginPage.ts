import { Page, expect } from '@playwright/test';

// export class LoginPage {
//     private page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }

//     async goto(url: string) {
//         await this.page.goto(url);
//         await this.page.locator('.__hr-auth__content > a').click();
//     }

//     async fill(email: string, password: string) {
//         await this.page.getByRole('textbox', { name: 'Username' }).fill(email);
//         await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
//     }

//     async clickLoginButton(url: string) {
//         await this.page.getByRole('button', { name: 'Submit' }).click();
//         await this.page.waitForURL(url);
//         await this.page.goto(url);
//     }

//     async visible() {
//         await expect(this.page.getByRole('link', { name: '宿泊施設選択後のページへ' })).toBeVisible()
//     }
// }

class LoginPage {
    constructor(private page: Page) { }

    async 表示する(url: string = "/") {
        await this.page.goto(url);
        await this.page.locator('.__hr-auth__content > a').click();
    }

    async 入力する(email: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    }

    async ログインする(url: string = "/") {
        await this.page.getByRole('button', { name: 'Submit' }).click();
        await this.page.waitForURL(url);
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async ログインできたかどうか確認する() {
        await expect(this.page.getByRole('link', { name: '宿泊施設選択後のページへ' })).toBeVisible()
    }

    async 商品一覧ページを表示する() {
        await this.page.getByRole('link', { name: '宿泊施設選択後のページへ' }).click();
    }
}

export default LoginPage;