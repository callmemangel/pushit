const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        game: './src/js/game.js',
        controls: './src/js/controls.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },

    plugins: [
        new ExtractTextPlugin('style.css') 
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
