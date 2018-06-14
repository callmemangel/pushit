var WebpackShellPlugin = require('webpack-shell-plugin');

let config = {
  entry: {
    test: './all-tests.js' 
  },

  output: {
    filename: 'testBundle.js' 
  },
  target: 'node',

  node: {
    fs: 'empty' 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader' 
        ]
      } 
    ] 
  },

  plugins: [
    new WebpackShellPlugin({
      onBuildExit: "mocha --colors dist/testBundle.js" 
    }) 
  ]
}

module.exports = config;
