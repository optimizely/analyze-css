// This file exists since the application is deployed
// on Heroku. The interesting code is in `worker.js`.
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 7360));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port') + '.');
});
