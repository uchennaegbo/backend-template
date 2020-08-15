module.exports = {
  extends: ["plugin:jest/recommended", "eslint:recommended"],
  parser: "babel-eslint",
  plugins: ["jest"],
  env: {
    "jest/globals": true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    // enable additional rules
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": [2, { allow: ["warn", "error"] }],
    "import/no-unresolved": [0],

    // jest

    "jest/no-disabled-tests": "warn",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};
