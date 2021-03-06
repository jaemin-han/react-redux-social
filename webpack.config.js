'use strict'
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');


module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: '/js/[name].js',
  },
  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Forecast',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root-container'
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true
    })
  ],

  module : {
    include: path.join(__dirname, 'src'),
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(svg|gif|png|jpg)$/,
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }
    ]
  }
};


//Backup
// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//   devtool: 'source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './client/reduxstagram'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],
//   module: {
//     loaders: [
//     // js
//     {
//       test: /\.js$/,
//       loaders: ['babel'],
//       include: path.join(__dirname, 'client')
//     },
//     // CSS
//     {
//       test: /\.styl$/,
//       include: path.join(__dirname, 'client'),
//       loader: 'style-loader!css-loader!stylus-loader'
//     }
//     ]
//   }
// };
