const js = require("@eslint/js");
const globals = require("globals");
const prettier = require("eslint-config-prettier");

module.exports = [
  { ignores: ["uploads/"] },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    ignores: ["public/**"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },

  {
    files: ["public/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser },
    },
  },

  prettier,
];
