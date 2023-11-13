module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', "*.html"],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "indent": ["error", 4],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    "no-unused-vars": "off",
    "react/prop-types": "off"
  },
}
