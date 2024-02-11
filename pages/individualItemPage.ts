import { Page } from '@playwright/test';

class IndividualItemPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async 部屋を作成する(name: string = "名前") {
        await this.page.locator('li').filter({ hasText: /^単品 新規作成$/ }).waitFor();
        await this.page.locator('label div').first().click();
        await this.page.locator('span').filter({ hasText: /^部屋$/ }).click({ force: true });
        await this.page.getByLabel('', { exact: true }).fill(name);
        await this.page.locator('div').filter({ hasText: /^---$/ }).nth(1).click();
        await this.page.locator('label').filter({ hasText: /^RC3$/ }).click({ delay: 3000, force: true });

        await this.page.getByRole('button', { name: '確定' }).click();
    }
}

export default IndividualItemPage;