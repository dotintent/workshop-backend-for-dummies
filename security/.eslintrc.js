module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'default-case': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
  },
};
