/**
 * Created by mattjohnston on 2016-01-07.
 */
var express = require('express');
var app = express();
app.use('/', express.static('public'));
app.get('/',function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('localhost:', port);
});