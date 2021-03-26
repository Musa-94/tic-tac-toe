module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  globals: {
    it: true,
    jest: true,
    React: true,
    expect: true,
    shallow: true,
    describe: true,
    ReactDOM: true,
    itRenders: true
  },
  rules: {
    camelcase: 0, // enforce 'camelcase' naming convention (обеспечить соблюдение правил именования 'camelcase')
    'comma-style': [2, 'last'], // enforce consistent comma style (использовать последовательный стиль запятой)
    'brace-style': ['error', '1tbs'], // enforce consistent brace style for blocks (применять согласованный стиль фигурной скобки для блоков)
    'semi-spacing': [2, { before: false, after: true }], // enforce consistent spacing before and after semicolons (обеспечивать согласованное расстояние до и после с запятой)
    'comma-spacing': [2, { before: false, after: true }], // enforce consistent spacing before and after commas (обеспечить согласованное расстояние до и после запятой)
    'arrow-spacing': [4, { before: true, after: true }], // enforce consistent spacing before and after the arrow in arrow functions (обеспечить согласованное расстояние до и после стрелки в стрелочках)
    'no-extra-parens': 1 // disallow unnecessary parentheses (запретить ненужные круглые скобки)
  }
}
