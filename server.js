var path = require('path');
var express = require('express');

var myApp = express();

myApp.use(express.static(path.join(__dirname, 'Movie API')));
myApp.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});