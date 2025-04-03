import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import stylisticJs from '@stylistic/eslint-plugin-js';
import tseslint from 'typescript-eslint';
import simpleImport from 'eslint-plugin-simple-import-sort';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import imports from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@typescript-eslint': ts,
      'simple-import-sort': simpleImport,
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: imports,
      'unused-imports': unusedImports,
    },
    rules: {
      ...ts.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'array-bracket-newline': ['error', { multiline: true }],
      'array-element-newline': ['error', 'consistent'],
      'object-curly-newline': ['error', { multiline: true }],
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      // React Rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility
      ...jsxA11y.configs.recommended.rules,
    },
  },
];

export default eslintConfig;
