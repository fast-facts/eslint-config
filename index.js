/* eslint-disable no-undef */
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const stylistic = require('@stylistic/eslint-plugin');
const noImplicitAnyFunctionArgs = require('eslint-plugin-no-implicit-any-function-args');
const angularPlugin = require('angular-eslint');
const rxjs = require('eslint-plugin-rxjs-updated');
const rxjsAngular = require('eslint-plugin-rxjs-angular-updated');

const javascript = {
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
    '@stylistic/max-statements-per-line': ['off'],
    '@stylistic/quote-props': ['error', 'as-needed'],

    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    }],
  },
};

const typescript = {
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

const angularTypescript = {
  extends: [
    ...angularPlugin.configs.tsRecommended,
    rxjs.configs.recommended,
  ],

  plugins: {
    rxjs,
    'rxjs-angular': rxjsAngular,
  },

  rules: {
    'rxjs/no-nested-subscribe': 'off',
    'rxjs/no-unsafe-catch': 'error',
    'rxjs/no-unsafe-switchmap': 'error',
    'rxjs/no-unsafe-takeuntil': 'error',

    'rxjs-angular/prefer-takeuntil': 'error',
  },
};

const angularHtml = {
  extends: [
    ...angularPlugin.configs.templateRecommended,
  ],
};

module.exports = {
  javascript: tseslint.config(javascript),
  typescript: tseslint.config(typescript),
  angular: tseslint.config(angularTypescript, angularHtml),
};
