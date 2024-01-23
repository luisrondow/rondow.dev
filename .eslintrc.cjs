module.exports = {
    extends: [
      "plugin:astro/recommended",
    ],
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
        processor: "astro/client-side-ts",
        rules: {
          // override/add rules settings here, such as:
          // "astro/no-set-html-directive": "error"
        },
      },
      // Rule for mjs files
      {
        files: ["*.mjs"],
        ecmaVersion: 2015,
        parserOptions: {
          sourceType: "module",
        },
      },
    ],
  }