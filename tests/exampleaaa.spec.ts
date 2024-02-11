import { test } from '@playwright/test';

import IndividualItemListPage from '../pages/individualItemListPage';
import IndividualItemPage from '../pages/individualItemPage';
import LoginPage from '../pages/loginPage';

test('ひょうじ', async ({ page }) => {
  var ログイン画面 = new LoginPage(page);
  var 商品一覧画面 = new IndividualItemListPage(page);
  var 商品画面 = new IndividualItemPage(page);

  await ログイン画面.表示する();
  await ログイン画面.入力する('id', 'pass');
  await ログイン画面.ログインする();
  await ログイン画面.ログインできたかどうか確認する();

  await ログイン画面.商品一覧ページを表示する();

  await 商品一覧画面.新規作成画面を表示する();

  await 商品画面.部屋を作成する("部屋サンプル");

});
