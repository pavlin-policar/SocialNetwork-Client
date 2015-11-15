var path = require('path');
var Webpack = require('webpack');

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
    path: path.join(__dirname, 'dist'),

    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel',

        // Only look inside these folders for files
        include: path.join(__dirname, 'src'),

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
