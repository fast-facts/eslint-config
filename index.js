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
  files: ['**/*.{js,mjs,cjs}'],

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
  files: ['**/*.{ts,tsx,mts,cts}'],

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
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
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
  files: ['**/*.ts'],

  extends: [
    ...angularPlugin.configs.tsRecommended,
    rxjs.default.configs.recommended,
  ],

  plugins: {
    rxjs,
    'rxjs-angular-x': rxjsAngular.default,
  },

  rules: {
    '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
    '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-lifecycle-call': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',

    'rxjs-x/no-nested-subscribe': 'off',
    'rxjs-x/no-unsafe-catch': 'error',
    'rxjs-x/no-unsafe-switchmap': 'error',
    'rxjs-x/no-unsafe-takeuntil': 'error',

    'rxjs-angular-x/prefer-takeuntil': 'error',
  },
};

const angularTemplate = {
  files: ['**/*.html'],

  extends: [
    ...angularPlugin.configs.templateRecommended,
  ],
};

const tailwind = {
  files: ['**/*.{ts,html}'],

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
