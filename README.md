# AppTrust

AppTrustは、個人開発者が公開しているWebアプリを収集・カタログ化し、簡易的なセキュリティ診断結果とともに利用者へ提供するためのプロジェクトです。本レポジトリはMVPフェーズの初期実装として以下の内容を含みます。

## プロジェクト概要

- **対象プラットフォーム**: 公開されている個人開発Webアプリ（GitHub Pages、独自ドメイン等）。
- **主要機能**:
  - アプリのメタデータ登録と一覧表示
  - HTTPS対応やセキュリティヘッダ有無、既知脆弱性のあるライブラリを確認する簡易スキャン
  - スコアリング結果の表示（Safe / Warn / Danger）
- **技術スタック**: Next.js (App Router)、Node.js、Prisma、PostgreSQL、BullMQ 等

## ディレクトリ構成

```
apptrust/
├── prisma/            # データベーススキーマとシードスクリプト
├── public/            # 公開静的ファイル
├── src/
│   ├── app/           # Next.js App Router 用ルート
│   ├── components/    # 再利用可能なReactコンポーネント
│   ├── lib/           # サーバーサイド/共通ロジック
│   └── pages/         # (オプション) pagesフォルダ（必要に応じて）
├── .env.example       # 環境変数サンプル
├── next.config.js     # Next.js 設定
├── package.json       # 依存関係とスクリプト
└── tsconfig.json      # TypeScript 設定
```

## 実行までの手順（想定）

1. Node.js と npm がインストールされていることを確認します。
2. リポジトリのルートで依存関係をインストールします。
   ```bash
   npm install
   ```
3. `.env` ファイルを作成し、`DATABASE_URL` など必要な環境変数を設定します。
4. Prisma のマイグレーションとシードを実行してデータベースを準備します。
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```
5. 開発サーバーを起動します。
   ```bash
   npm run dev
   ```

※ このリポジトリはインターネットからライブラリを取得できない環境で作成されているため、依存パッケージの取得および実行はローカル環境で行ってください。実行時には `next`, `react`, `@prisma/client`, `prisma`, `bullmq` などをインストールする必要があります。
