module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 세미콜론을 찍지 않을 경우에 대한 규칙
    semi: ["error", "always"],
  },
};
