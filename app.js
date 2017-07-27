var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.requireAuth);
app.use(middleware.logger);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public' + '/index.html');
});

app.use(express.static(__dirname + '/public'));

app.get('/about',middleware.requireAuth, function(req, res){
    res.send('About us!');
});

app.listen(PORT, function(){
    console.log('Express server started on port ' + PORT + '!');
});