# eslint-config

```bash
npm install -D eslint-config-final
```

## Quickstart

```js
const tseslint = require('typescript-eslint');

const config = require('eslint-config-final');

module.exports = tseslint.config(
  // Javascript
  {
    files: ['**/*.js'],

    extends: [
      ...config.javascript,
    ],
  },
  
  // Typescript
  {
    files: ['**/*.ts'],

    extends: [
      ...config.typescript,
    ],
  },

  // Angular
  {
    files: ['**/*.ts'],

    extends: [
      ...config.typescript,
      ...config.angularTypescript,
    ],
  },
  {
    files: ['**/*.html'],

    extends: [
      ...config.angularTemplate,
    ],
  },
);

```
