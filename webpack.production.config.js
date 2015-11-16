var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'assets');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('bundle.css', { allChunks: false })
  ],
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
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(
            'style-loader',
            'css-loader!autoprefixer-loader!sass-loader'
        )
      }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  }
};