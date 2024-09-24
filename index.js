/* eslint-disable no-undef */
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const stylistic = require('@stylistic/eslint-plugin');
const noImplicitAnyFunctionArgs = require('eslint-plugin-no-implicit-any-function-args');

/** @type {import('typescript-eslint').ConfigWithExtends} */
const javascript = {
  files: ['**/*.js'],

  extends: [
    eslint.configs.recommended,
    stylistic.configs.customize({
      flat: true,
      semi: true,
      jsx: false,
      braceStyle: '1tbs',
    }),
  ],

  rules: {
    eqeqeq: ['error', 'always', {
      null: 'ignore',
    }],
    'prefer-arrow-callback': 'error',

    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    '@stylistic/quote-props': ['error', 'as-needed'],

    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    }],
  },
};

/** @type {import('typescript-eslint').ConfigWithExtends} */
const typescript = {
  files: ['**/*.ts'],

  extends: [
    ...javascript.extends,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
  ],

  plugins: {
    'no-implicit-any-function-args': noImplicitAnyFunctionArgs,
    '@typescript-eslint': tsPlugin,
  },

  rules: {
    ...javascript.rules,

    '@typescript-eslint/no-deprecated': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],

    'no-implicit-any-function-args/no-implicit-any-function-args': [
      'error',
      {
        ignorePattern: '^_',
      },
    ],
  },
};

module.exports = {
  javascript: tseslint.config(javascript),
  typescript: tseslint.config(typescript),
};
