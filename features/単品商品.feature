Feature: ユーザーログイン

    Scenario Outline: ユーザーがログインできることを確認する
        Given "<url>" へアクセスし、ログイン画面を表示する
        When "<email>" と "<password>" を入力する
        And ログインボタンをクリックし "<url>" へアクセスする
        Then ログイン後の画面が表示されること

        Examples:
            | url  | email | password | result |
            | xxxx | xxx   | xxxx     | xxx    |
