// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Global ignores
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/node_modules/**',
      '**/*.js.map',
      '*.config.js',
      '*.config.mjs',
    ],
  },

  // Project-wide TypeScript settings
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // Enforce explicit return types on public APIs
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      // Disallow any unless intentional
      '@typescript-eslint/no-explicit-any': 'warn',
      // Require consistent type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      // No unused variables (allow _ prefix)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // Prefer const
      'prefer-const': 'error',
      // No var
      'no-var': 'error',
    },
  },
);

