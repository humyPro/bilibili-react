module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'consistent-return': ['off'],
    'no-debugger': ['off'],
    'no-restricted-globals': ['off'],
    'no-plusplus': ['off'],
    'no-underscore-dangle': ['off'],
    'prefer-destructuring': ['off'],
    'max-len': ['off'],
    'func-names': ['off'],
    'no-unused-vars': ['off'],
    'no-unused-expressions': ['off'],
    'no-nested-ternary': ['warn'],
    'import/order': ['off'],
    'import/no-extraneous-dependencies': ['warn'],
    'no-param-reassign': ['off'],
    'no-irregular-whitespace': ['off'],
    'no-return-assign': ['off'],
    'no-tabs': ['off'],
    'no-console': ['off'],
    'implicit-arrow-linebreak': ['off'],
    radix: ['off'],
    'import/no-unresolved': ['warn'],
    'arrow-parens': ['off'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'object-curly-newline': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'no-use-before-define': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/require-default-props': ['off'],

    // jsx-a11y/no-static-element-interactions
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off']
  }
}
