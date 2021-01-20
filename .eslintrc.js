const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-console': 'warn',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },

  settings: {
    'import/resolver': {
      typescript: {
        project: path.join(__dirname, './tsconfig.json'),
      },
    },
  },
  ignorePatterns: ['node_modules', '.eslintrc.js'],
};
