'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());

// Log request
app.use(logger('dev'));

// Set static file root folder
// sets logging so that we can see what's happening
// and sets static assets path - my styling
app.use(express.static(path.join(__dirname, 'dist')));

// Listen on port for connections
app.listen(PORT, () => console.log('Server Listening Alright!', PORT));
