"use strict";

var _require = require('../server'),
    io = _require.io;

io.on('connection', function (client) {
  console.log('Usuario conectado');
  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicación'
  });
  client.on('disconnect', function () {
    console.log('Usuario desconectado');
  });
  client.on('enviarMensaje', function (data, callback) {
    console.log(data);
    client.broadcast.emit('enviarMensaje', data); // if(mensaje.usuario) {
    //     callback({
    //         resp: "Todo salió bien!"
    //     })
    // }else{
    //     callback({
    //         resp: "Todo salió mal!"
    //     })
    // }
  });
});