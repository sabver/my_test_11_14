## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

# 環境構築ステップ
1. Nodejsのバージョン確認
```bash
# 16.0.10
node -v
```

2. NextJs 13+React 18＋Typescriptの導入
```bash

# https://nextjs.org/docs/getting-started

yarn create next-app --typescript
```

3. ESLintを導入
```bash

# .eslintrc.json
{
  "extends": ["next", "next/core-web-vitals", "prettier"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  "rules": {
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": [
      "warn"
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": "off"
  }
}

# install dependencies
yarn add -D typescript @typescript-eslint/parser

yarn add -D @typescript-eslint/eslint-plugin

yarn add -D eslint-plugin-simple-import-sort

yarn add -D eslint-plugin-unused-imports

yarn add --dev eslint-config-prettier
```

4. tailwindcssを導入
```bash
# https://tailwindcss.com/docs/guides/nextjs

yarn add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

# tailwind.config.js内容変更
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


# styles/globals.css内容変更

@tailwind base;
@tailwind components;
@tailwind utilities;

```

5. lint-stagedを導入
```bash
# .lintstagedrc.js
＃create .lintstagedrc.js file
const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}

# install lint-staged
yarn add -D lint-staged
```

# Framework
## NextJs 13+React 18
 - https://nextjs.org/docs/getting-started

## Tailwind

## SWR
 

## Test
 - React Testing Library


# Code Structure


# Please make an app to search GitHub repositories.
 - Use the following API from GitHub: https://docs.github.com/en/rest/reference/search
 - Implement a design in CSS. It can be as simple as you want.
 - Implement throttling to fetch data from the API.
 - Implement pagination.
 - Use TypeScript.
 - Use React.
