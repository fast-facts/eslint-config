/* eslint-disable no-undef */
const tseslint = require('typescript-eslint');

const config = require('./index.js');

module.exports = tseslint.config(
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
    ],
  },
  {
    files: ['**/*.js'],

    extends: [
      ...config.javascript,
    ],
  }
);
