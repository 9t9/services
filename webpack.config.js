const path = require('path');
const webpack = require('webpack');

const DEBUG = process.env.NODE_ENV !== 'production';

const config = {
  devtool: DEBUG ? 'source-map' : false,
  entry: [
    path.join(__dirname, 'src')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

if (!DEBUG) {
  config.plugins = config.plugins.concat([
    // new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]);
}

module.exports = config;
