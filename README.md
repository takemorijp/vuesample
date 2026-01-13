# Vue Management System

このプロジェクトは、Vue 3 + TypeScript + Vite + Tailwind CSS + Storybook で構築された管理画面アプリケーションです。

## 技術スタック

- **Vue 3**: Progressive JavaScript Framework
- **TypeScript**: 型安全性を提供
- **Vite**: 高速なビルドツール
- **Tailwind CSS**: ユーティリティファーストCSSフレームワーク
- **lucide-vue-next**: アイコンライブラリ
- **Storybook**: UIコンポーネントのカタログ化

## セットアップ

### 依存関係のインストール

```bash
npm install
```

## 開発

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

### Storybookの起動

```bash
npm run storybook
```

ブラウザで `http://localhost:6006` にアクセスしてください。

## ビルド

### プロダクションビルド

```bash
npm run build
```

### Storybookのビルド

```bash
npm run build-storybook
```

## 主な機能

### 認証機能
- ログイン画面（初期値: test@example.com / password123）
- パスワードリセット画面
- 新規登録画面

### メイン画面
- ダッシュボード: 統計情報の表示
- ドキュメント管理: ファイル一覧、検索、フィルター
- ユーザー管理: ユーザー一覧、追加、編集、削除
- 設定画面: 各種設定

### UI/UX機能
- レスポンシブデザイン
- サイドバーの開閉
- ESCキーでダイアログを閉じる
- スクロールロック
- ARIAアクセシビリティ対応
- アニメーション（トランジション1200ms）

## プロジェクト構成

```
vuesample/
├── src/
│   ├── App.vue              # ルートコンポーネント
│   ├── main.ts              # エントリーポイント
│   ├── components/          # Vueコンポーネント
│   │   ├── Login.vue
│   │   ├── ForgotPassword.vue
│   │   ├── SignUp.vue
│   │   ├── Header.vue
│   │   ├── Sidebar.vue
│   │   ├── pages/           # ページコンポーネント
│   │   └── ui/              # UIコンポーネント (Atomic Design)
│   ├── stories/             # Storybookストーリー
│   └── styles/              # スタイルファイル
├── .storybook/              # Storybook設定
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

## 注意事項

このプロジェクトは **Vue 3 のみ** を使用しています。React関連の依存関係は完全に削除されています。

PowerShell実行ポリシーエラーが発生する場合は、CMDで実行してください。
