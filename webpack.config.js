var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    // We need to give Webpack a path. It does not actually need it, because
    // files are kept in memory in webpack-dev-server, but an error will occur
    // if nothing is specified. We use the buildPath as that points to where
    // the files will eventually be bundled in production
    path: path.join(__dirname, 'assets'),

    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel',

        // There really is no need to transpile node modules, since they are
        // already ES5
        exclude: /node_modules/,

        // Only look inside these folders for files
        include: path.join(__dirname, 'src'),

        // Only run `.js` and `.jsx` files through babel
        test: /\.jsx?$/,

        // Configure babel
        query: {
          optional: 'runtime',
          stage: 0
        }
      },
      {
        test: /\.scss/,
        loader: 'style!css!autoprefixer!sass'
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
