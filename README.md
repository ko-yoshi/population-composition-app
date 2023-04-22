# 都道府県別人口推移グラフ

[デプロイ先](https://main--dapper-arithmetic-b4f006.netlify.app/)

## 開発-初回

```bash
git clone https://github.com/ko-yoshi/population-composition-app.git
cd population-composition-app
npm install
```

### 環境変数の設定

`.env` をプロジェクトルート(nuxt.config.ts がある階層)に作成してください。

```bash
# .env
API_BASE_URL='https://opendata.resas-portal.go.jp/api/v1'
RESAS_API_KEY='自分のAPIキー'
```

API キーの取得は ↓ コチラ  
https://opendata.resas-portal.go.jp/

### 起動

```bash
npm run dev
```

### lint

```bash
npm run lintfix
```

### テスト

```bash
npm run test
```

### 補足・・・という名の技術不足痛感

```bash
実装自体は8時間前後で完了しましたが、Vitestの調整に10時間前後時間をとられています。
Vitest(Jest)の経験不足が大きいのは間違いありませんが、Nuxt3 独自の要素も絡んでカオスになってしまいました（一部実装も変えましたが）。Nuxt3上でVitestが動かない…動かしづらい…辛い…。
そのため満足できない仕上がりになっています。申し訳ありません。。
```
