module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "prettier/prettier": ["warn"],
    "vue/html-indent": ["warn"],
    "vue/require-default-prop": ["warn"],
    "no-unused-vars": ["warn"],
    "indent": "off",
    "spaced-comment": "off",
    "vue/attributes-order": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "no-multiple-empty-lines": "off"
  }
}
