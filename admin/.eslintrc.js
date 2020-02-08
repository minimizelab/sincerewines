module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: '16.12',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react'],
};
