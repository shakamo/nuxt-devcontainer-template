module.exports = {
    default: {
        require: ['step_definitions/**/*.ts'],  // テストスクリプトが格納される場所
        requireModule: ['ts-node/register'],    // TypeScript実行用の設定
        format: [
            'summary',
            'progress-bar',                     // 実行時にプログレスバーをログ表示する設定
            'html:cucumber-report.html'         // テスト結果をHTMLファイルで出力する設定
        ],
    }
}