module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  ignorePatterns: ["gen/pb", "gen/pb/svc/"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    quotes: [1, "double"],
    "quote-props": [2, "as-needed"],
    "object-curly-spacing": ["off"],
    "no-var": ["off"],
    "require-jsdoc": ["off"],
    "space-before-function-paren": ["off"],
  },
};
