const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: path.join(__dirname, './src/_AppIncludes.html'),
            filename: path.join(__dirname, './dist/_AppIncludes.cshtml')
        })
    ]
});