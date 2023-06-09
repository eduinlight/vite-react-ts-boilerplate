module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": [
      "error",
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ],
  },
};
