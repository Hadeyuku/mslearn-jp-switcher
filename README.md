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

1. このリポジトリをクローンまたは ZIP ダウンロード  
   ```bash
   git clone https://github.com/hadeyuku/mslearn-jp-switcher.git

2. ブラウザで edge://extensions もしくは chrome://extensions を開く

3. 右上 「デベロッパー モード」 を ON

4. 「展開している拡張機能を読み込む」 → src フォルダーを選択

5. 英語版 Learn ページでツールバーアイコンをクリック → 日本語にリダイレクトされれば成功
