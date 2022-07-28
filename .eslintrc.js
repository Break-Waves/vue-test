module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //当内置的eslint规则不符合我们的要求时，可以在rule里边覆盖关闭
    "vue/multi-word-component-names": "off",
    eqeqeq: "error",
    "vue/no-mutating-props": "off"
  }
}