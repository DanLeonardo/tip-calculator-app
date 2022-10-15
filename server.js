const express = require('express');
const favicon = require('express-favicon');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT | 8000;

const app = express();
const server = http.createServer(app);

app.use(favicon(__dirname + '/build/favicon-32x32.png'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

server.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
