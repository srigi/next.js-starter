/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
    "plugin:prettier/recommended", // display Prettier errors as ESLint errors
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "prefer-const": "warn",
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
  },
};
