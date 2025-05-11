# MS Learn JP Switcher

英語版 **Microsoft Learn** ページをワンクリックで日本語版 URL に切り替える、  
超軽量の Edge／Chrome 拡張機能です。  

|            |                       |
|------------|-----------------------|
| **動作環境** | Microsoft Edge または Google Chrome (Manifest V3 対応版) |
| **バージョン** | v1.0.0 |
| **ライセンス** | MIT |
| **作者** | Hideyuki Nakagawa|

---

## ✨ 主な機能

| 機能 | 説明 |
|------|------|
| **ワンクリック切替** | 英語 URL の `/en-us/` を `/ja-jp/` に置換して同一記事の日本語版へ移動 |
| **Edge / Chrome 共通** | Chromium API (`chrome.*`) を使用しており両ブラウザで動作 |
| **最小構成** | Manifest V3 + Service Worker 1 ファイルだけ。高速・低負荷 |

---

## 📦 インストール方法

### 開発者モードで使う（おすすめ）

1. このリポジトリをクローン 
   ```bash
   git clone https://github.com/hadeyuku/mslearn-jp-switcher.git

2. ブラウザで edge://extensions もしくは chrome://extensions を開く

3. 右上 「デベロッパー モード」 を ON

4. 「展開している拡張機能を読み込む」 → src フォルダーを選択

5. 英語版 Learn ページでツールバーアイコンをクリック → 日本語にリダイレクトされれば成功


# PowerShell だけで "MS Learn JP Switcher" 拡張をつくる手順まとめ 
🖥️ 前提ソフト

- VS Code
- Node.js (LTS) — npm が使える状態
- Microsoft Edge（または Chrome）

## 1｜プロジェクトを作成して移動 powershell

```powershell
New-Item -Type Directory mslearn-jp-switcher Set-Location mslearn-jp-switcher # cd .\mslearn-jp-switcher でも OK
```
## 2｜npm 初期化（ビルド不要なら -y） 
```powershell
powershellnpm init -y
```
## 3｜ソース用フォルダーとファイルを作成 powershell
```powershell
New-Item -Type Directory src New-Item -Type File src\manifest.json New-Item -Type File src\background.js
```

## 4｜VS Code で編集 
```powershell
code .
```
src/manifest.json
```jsonc
{ "name": "MS Learn JP Switcher", "description": "英語版 MS Learn をワンクリックで日本語版に切り替えます。", "version": "1.0.0", "manifest_version": 3, "action": { "default_title": "Switch to Japanese" }, "permissions": ["tabs", "scripting"], "host_permissions": ["https://learn.microsoft.com/*"], "background": { "service_worker": "background.js" } }
```
src/background.js
```javascript
chrome.action.onClicked.addListener(async (tab) => { if (!tab.url) return; const jp = tab.url.replace(/\/en-us\//i, "/ja-jp/"); if (jp !== tab.url) await chrome.tabs.update(tab.id, { url: jp }); });
```
ここまで保存すればファイル編集は完了です。
## 5｜Edge に "展開" してテスト

1. ブラウザで edge://extensions を開き、右上 デベロッパー モード を ON
2. 「展開している拡張機能を読み込む」 → src フォルダーを選択
3. 英語版 MS Learn ページでツールバーアイコンをクリック

- 日本語 URL（/ja-jp/）に切り替われば成功 🎉

4. コードを更新したら拡張ページの [更新] ボタンを押すだけで即リロード
