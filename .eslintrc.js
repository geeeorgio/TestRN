module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import', 'react-hooks'],
  rules: {
    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Imports
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/export': 'warn',

    // Shadow variables
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // Redeclare
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    // Consistent imports
    '@typescript-eslint/consistent-type-imports': 'error',

    // Import order
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  globals: {
    JSX: true,
  },
};
