module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
    'prettier/react',
  ],
  
  parser: "@typescript-eslint/parser",
  plugins: [
    'react-hooks',
  ],
  rules: {
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0
  },
};