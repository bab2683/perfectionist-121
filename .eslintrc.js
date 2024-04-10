module.exports = {
  plugins: ["perfectionist"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      files: ["*.ts", "*.tsx"],
      rules: {
        "perfectionist/sort-interfaces": [
          "error",
          {
            type: "alphabetical",
            order: "asc",
            "optionality-order": "required-first",
            "ignore-case": true,
          },
        ],
        "perfectionist/sort-union-types": [
          "error",
          {
            type: "alphabetical",
            order: "asc",
            "ignore-case": true,
          },
        ],
        "perfectionist/sort-enums": [
          "error",
          {
            type: "alphabetical",
            order: "asc",
            "ignore-case": true,
          },
        ],
        "perfectionist/sort-object-types": [
          "error",
          {
            type: "alphabetical",
            order: "asc",
            "ignore-case": true,
          },
        ],
        "perfectionist/sort-objects": [
          "error",
          {
            type: "alphabetical",
            order: "asc",
            "ignore-case": true,
          },
        ],
      },
    },
  ],
};
