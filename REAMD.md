# ポモドーロタイマー

## Day2

### できたこと
・開始ボタンをクリックするとメッセージ表示

### 学んだこと

document
→ JavaScriptからHTMLを操作する入口

getElementById()
→ idを指定してHTML要素を取得

const
→ 要素を名前付きで保存

addEventListener()
→ クリックなどのイベントを検知

textContent
→ HTMLの文字を書き換える

### 次回
25:00の数字をJavaScriptで操作する

## Day3

### できたこと
- GitとGitHubをつかえるようにした

# Day4

## 今日の目標
JavaScriptからタイマー表示（25:00）を取得する。

## できたこと
- h2タグに id="timer" を追加した。
- JavaScriptで document.getElementById() を使ってHTML要素を取得した。
- textContent を使って表示されている「25:00」を取得し、コンソールへ表示できた。

## 学んだこと
- document はHTML全体を表している。
- getElementById() はHTML要素を取得する。
- textContent はHTML要素の中にある文字を取得する。
- HTML要素と文字列は別物である。

## 詰まったこと
最初は file:// でHTMLをエクスプローラーから開いていたためエラーが発生した。
Go Live（Live Server）で開くことで正常に動作した。

## 次回やること
JavaScriptで25:00を1秒ごとに変化させる。