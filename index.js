/* eslint-disable no-undef */
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const stylistic = require('@stylistic/eslint-plugin');
const noImplicitAnyFunctionArgs = require('eslint-plugin-no-implicit-any-function-args');
const angularPlugin = require('angular-eslint');
const rxjs = require('eslint-plugin-rxjs-x');
const rxjsAngular = require('eslint-plugin-rxjs-angular-x');
const tailwindcss = require('eslint-plugin-tailwindcss');

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
    'no-unused-expressions': 'off',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    'prefer-arrow-callback': 'error',

    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    '@stylistic/indent': ['off'],
    '@stylistic/max-statements-per-line': ['off'],
    '@stylistic/operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/yield-star-spacing': ['error', {
      before: false,
      after: true,
    }],

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
  },

  rules: {
    ...javascript.rules,
    'no-unused-vars': 'off',

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

    'no-implicit-any-function-args/no-implicit-any-function-args': ['error', {
      ignorePattern: '^_',
    }],
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

const angularTemplate = {
  extends: [
    ...angularPlugin.configs.templateRecommended,
  ],
};

const tailwind = {
  extends: [
    ...tailwindcss.configs['flat/recommended'],
  ],
};

module.exports = {
  javascript: tseslint.config(javascript),
  typescript: tseslint.config(typescript),
  angularTypescript: tseslint.config(angularTypescript),
  angularTemplate: tseslint.config(angularTemplate),
  tailwind: tseslint.config(tailwind),
};
