import { Page } from '@playwright/test';

class IndividualItemListPage {
    constructor(private page: Page) { }

    async 新規作成画面を表示する() {
        await this.page.getByRole('link', { name: '新規作成' }).click();
    }
}

export default IndividualItemListPage;