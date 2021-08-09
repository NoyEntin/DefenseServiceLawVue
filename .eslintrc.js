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
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    test: /\.vue$/,
    loader: 'vue-loader',
    // vue-loader options goes here
    options: {
      loaders: {
        'js': 'babel-loader'
      }
    }
      
    
  }
}
