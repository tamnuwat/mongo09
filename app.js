var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./Config/config.js');
let message = require('./Routes/Message.js');

var port = process.env.PORT || 8081;

// mongodb
mongoose.connect(config.db,{ useNewUrlParser: true });
var db = mongoose.connection;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/message',message);

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
