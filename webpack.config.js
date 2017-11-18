const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client/prod',
  entry: './index.jsx',
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};