var Webpack = require('webpack');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',

        // Only look inside these folders for files
        include: path.join(__dirname, 'src'),

        exclude: [nodeModulesPath],

        // Only run `.js` and `.jsx` files through babel
        test: /\.jsx?$/,

        // Configure babel
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.webpack.js'
    ]
  }
};