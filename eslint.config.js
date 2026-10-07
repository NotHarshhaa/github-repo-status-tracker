import js from '@eslint/js'
import nextPlugin from 'eslint-config-next'
import typescriptEslint from 'typescript-eslint'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['.next/', 'node_modules/', 'dist/', 'build/', 'scripts/', '*.config.*'] },
  ...typescriptEslint.configs.recommended,
  ...nextPlugin,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: eslintPluginImport,
      n: eslintPluginN,
      promise: eslintPluginPromise,
      react: eslintPluginReact,
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            { pattern: '@/**', group: 'internal' },
            { pattern: '@/config/**', group: 'internal' },
            { pattern: '@/lib/**', group: 'internal' },
            { pattern: '@/components/**', group: 'internal' },
            { pattern: '@/data/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: [],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'n/no-extraneous-import': 'warn',
      'promise/always-return': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  js.configs.recommended,
]