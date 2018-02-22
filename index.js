module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    semi: [2, 'never'],
    'linebreak-style': 0,
  },
};
