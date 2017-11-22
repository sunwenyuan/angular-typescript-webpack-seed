'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var config = {
  target: 'web',
  entry: {
    app: './src/app.ts',
    libs: './src/libs.ts'
  },

  resolve: {
    modules: [
      helpers.root('src'),
      helpers.root('node_modules')
    ],
    extensions: ['.js', '.ts'],
    symlinks: false,
    cacheWithContext: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [helpers.root('src')],
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.less$/,
        include: [helpers.root('src', 'application')],
        use: [{
          loader: 'raw-loader'
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff|jpg|png).*$/,
        loader: ['file-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['libs'],
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      chunks: ['libs', 'app']
    }),

    // Inside angular4, some third party libraries  are loaded runtime, this will
    // trigger an warning in webpack, this plugin is used to remove such warnings.
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      __dirname
    ),
    new CheckerPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ]
};

module.exports = config;