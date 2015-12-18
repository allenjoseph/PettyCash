var express = require("express");
var app = express();

app.use(express.static(__dirname));

process.env.IP = process.env.IP || '127.0.0.1';
process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, process.env.IP, null, function(){
    console.log('listen on port', process.env.PORT, 'of', process.env.IP);
});