module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: ['error', 4],
    semi: [2, 'never'],
    'linebreak-style': 0,
  },
};
