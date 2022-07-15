module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "google", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  ignorePatterns: ["gen/pb/svc/*.js", "gen/pb/svc/*.ts", "gen/pb/unit/**/*.js", "gen/pb/unit/**/*.js"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    quotes: [1, "double"],
    "quote-props": [2, "as-needed"],
    "object-curly-spacing": ["off"],
    "no-var": ["off"],
    "require-jsdoc": ["off"],
    "space-before-function-paren": ["off"],
    camelcase: ["off"],
    "max-len": "off",
    indent: "off",
    "comma-dangle": "off"
  }
};