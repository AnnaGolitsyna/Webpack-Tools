module.exports = {
  env: {
    browser: true,
  },
  extends: 'eslint-config-airbnb-base',

  rules: {
    'no-console': 2,
    'import/prefer-default-export': 0,
    'no-param-reassign': 1,
    'no-unused-expressions': 1,
    'no-unused-vars': 1,
    'no-undef': 1
  },
};
