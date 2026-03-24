Hướng dẫn cách setup eslint + husky cho dự án 
## 1. Cài đặt husky + commit-lint 
```
bun add husky @commitlint/cli @commitlint/config-conventional
```

```
npm pkg set scripts.prepare="husky"
npm run prepare
echo "npx --no -- commitlint --edit ${1}" > .husky/commit-msg
```

```
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```
- Vào file package.json. Thêm các dòng sau: 

```
type : "module" 

```

## 2. Cài đặt kiểm tra biến tào lao 

```
bun add -D eslint prettier eslint-config-prettier eslint-plugin-prettier lint-staged
```
- Trong folder .husky, tạo file pre-commit. Bên trong chứa câu lệnh sau: 
```
npx lint-staged
```

- File .eslintrc.json 
```js 
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```
- File .prettierrc
```js
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "printWidth": 80,
    "trailingComma": "all"
}

``` 
- Thêm vào package.json 
```js 
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --max-warnings=0",
      "prettier --write"
    ]
  }
}
```

- File eslint.config.js 
```js 
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],

        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2020,
            globals: globals.browser,
        },

        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },

        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
        },
    },
]);
```