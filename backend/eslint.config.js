import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.node,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'prettier',
    ],
  },
];
