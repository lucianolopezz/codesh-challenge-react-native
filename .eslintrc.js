module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
