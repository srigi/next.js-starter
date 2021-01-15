module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended', // display prettier errors as ESLint errors. Make sure this is always the last configuration!
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'arrow-body-style': 'off', // statement(s) block is good for prototyping
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // fix for TypeScript
    'react/prop-types': 'off', // not needed with Typescript
    'react/react-in-jsx-scope': 'off', // not needed since new JSX transform
  },
};
