const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const srcDir = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    game: './src/js/game.jsx',
    controls: './src/js/controls.jsx',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/'
  },

  resolve: {
    alias: {
      '@': srcDir,
    }
  },

  plugins: [
    new ExtractTextPlugin('reset.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) 
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        warnings: false,
        mangle: true,

        output: {
          comments: false,
          beautify: false,
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
      }
    })  
  ],
    
  devServer: {
    overlay: true 
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      },
    ]
  }
}
