module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "camelcase": "off",
    "class-methods-use-this": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-console": "off",
  },
  ignorePatterns: ['*.d.ts']
};
