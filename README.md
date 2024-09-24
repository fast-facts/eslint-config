# eslint-config

```bash
npm install -D eslint-config-final
```

## Quickstart

```js
const tseslint = require('typescript-eslint');

const config = require('eslint-config-final');

module.exports = tseslint.config(
  {
    files: ['**/*.js'],

    extends: [
      ...config.javascript,
    ],
  },
  {
    files: ['**/*.ts'],

    extends: [
      ...config.typescript,
    ],
  }
);

```
