const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        game: './src/js/game.jsx',
        controls: './src/js/controls.jsx'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) 
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

            {
                test: /\.(jpg|png)$/,
                use: [
                    'file-loader' 
                ]
            }
        ]
    }
}
