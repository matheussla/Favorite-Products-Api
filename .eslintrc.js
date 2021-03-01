module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "max-len": [2, 120, 4, {"ignoreUrls": true}],
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,
    'linebreak-style': 0,
    'no-console': 0,
  },
};
