const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
    entry: {
      app: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].[hash].js',        
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
              test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              ]
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/'
                  }
                }
              ]
            },
        ]
    },
    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['!/img/']
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new WebpackMd5Hash(),
      new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery"
      })
    ]
  };