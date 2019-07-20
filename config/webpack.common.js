const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = path.resolve(__dirname, '../src');

let config = {
  context: srcDir,

  entry: {
    app: './index.jsx',
  },

  resolve: {
    modules: ['node_modules', srcDir],
    alias: {
      '@': srcDir,
    },
    extensions: ['.js', '.jsx', '.css'],
  },

  output: {
    filename: 'main.js',
    path: path.join(__dirname, '../dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
    }),

    new ExtractTextPlugin('style.css'),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|jpg|ico)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
};

module.exports = config;
