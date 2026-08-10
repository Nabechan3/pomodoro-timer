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

# Day5

##今日の目標
ポモドーロタイマー 1秒毎に動かす

## できたこと
- setInterval
 ↓
1秒ごとの処理
 ↓
letで残り時間を管理
 ↓
countdownを1減らす
 ↓
/ と % で分・秒に分ける
 ↓
Math.floor()
 ↓
String()
 ↓
padStart()
 ↓
if
 ↓
clearInterval

## 詰まったこと
25:00を分と秒に分けること、/と%の使い分け、Math.floorで整数取り出し
padStart()は文字列で機能するため、sはNumberのためにString(s)で文字列に変換する必要があったこと
0になったらとめること、clearInterval

## 次回やること
開始ボタンでカウントダウンが始まるようにする
