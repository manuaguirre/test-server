// var http = require('http');

// http.createServer( (req, res) => {
//     res.write('Hello World');
//     res.end();
// }).listen(8080);

// console.log('listening on port 8080')

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);