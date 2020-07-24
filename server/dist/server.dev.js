"use strict";

var express = require('express');

var socketIO = require('socket.io');

var http = require('http');

var path = require('path');

var app = express();
var server = http.createServer(app);
var publicPath = path.resolve(__dirname, '../public');
var port = process.env.PORT || 3000;
app.use(express["static"](publicPath));
module.exports.io = socketIO(server);

require('./sockets/socket');

server.listen(port, function (err) {
  if (err) throw new Error(err);
  console.log("Servidor corriendo en puerto ".concat(port));
});