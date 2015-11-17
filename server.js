var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var app = express();
var proxy = httpProxy.createProxyServer();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, '.');

app.use(express.static(publicPath));

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because it is only needed in a
  // development environment. Later you will see why this is a good idea
  var bundle = require('./server/bundle.js');
  bundle();

  // Send a dummy css file when in development, so we don't get errors. In
  // production, the css file will be generated, but in development the styling
  // happens via the javascript bundle, resulting in a 404 for the css file
  app.get('/assets/bundle.css', function(req, res) {
    res.send('');
  });

  // Serve all images properly
  app.all('/assets/images/*');

  // Any requests to localhost:3000/build is proxied to webpack-dev-server
  app.all('/assets/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });

  // Redirect all trafic to index.html since react router handles all routing
  // anyways.
  app.all('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });

}

// It is important to catch any errors from the proxy or the server will crash.
// An example of this is connecting to the server when webpack is bundling
proxy.on('error', function (e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});

/*
 // Old webpack dev server, worked fine while routing was all regular, broke
 // when rewrites were required
 new WebpackDevServer(webpack(config), {
 publicPath: config.output.publicPath,
 hot: true,
 historyApiFallback: true
 }).listen(3000, '0.0.0.0', function (err, result) {
 if (err) {
 console.log(err);
 }

 console.log('Listening at localhost:3000');
 });
 */
