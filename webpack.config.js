const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

const config = {
  devtool: DEBUG ? 'source-map' : false,
  entry: [
    path.join(__dirname, 'src')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    }),
    new ExtractTextPlugin('style.css'),
    new ProgressBarPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: 'css-loader?sourceMap'
       })
      }
    ]
  }
};

if (!DEBUG) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]);
}

module.exports = config;
