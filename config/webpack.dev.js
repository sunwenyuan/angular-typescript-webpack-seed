'use strict';
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'eval-cheap-module-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8100/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    stats: 'minimal',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
