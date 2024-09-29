import globals from 'globals';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import babelParser from '@babel/eslint-parser'; // Babel 파서 추가

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['node_modules/**'], // ESLint에서 무시할 파일들 설정
    languageOptions: {
      globals: globals.browser,
      parser: babelParser, // Babel 파서를 ESLint에서 사용
      parserOptions: {
        requireConfigFile: false, // Babel 설정 파일이 필요하지 않도록 설정
        babelOptions: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
    },
  },
];
