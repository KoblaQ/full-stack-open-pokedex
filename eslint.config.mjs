import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['app.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    settings: { react: { version: 'detect' } },
    rules: { 'react/prop-types': 'off' },
  },
];
