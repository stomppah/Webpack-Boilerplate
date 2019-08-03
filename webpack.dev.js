const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      host: '127.0.0.1',
      port: 5000,
      contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: path.join(__dirname, 'src/index.html'),
            filename: path.join(__dirname, 'dist/index.html')
          })
    ]
});