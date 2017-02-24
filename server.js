// Need Update

'use strict'
const express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

const PORT = process.argv[2] || process.env.port || 3000;

// This will parse our payload from fetch which is sent as a JSON object
// app.use(bodyParser.json());

// Log request
// app.use(logger('dev'));

// Set static file root folder
// sets logging so that we can see what's happening
// and sets static assets path - my styling
// app.use(express.static(path.join(__dirname, 'dist')));

// Listen on port for connections
// app.listen(PORT, () => console.log('Server Listening Alright!', PORT));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
