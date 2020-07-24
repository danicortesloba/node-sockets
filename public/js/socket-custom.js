
        var socket = io();
        socket.on('connect', function(){
            console.log("Conectado al servidor");
        })
        socket.on('disconnect', function(){
            console.log('Perdimos conexión con el servidor');
        })

        socket.emit('enviarMensaje',{
            usuario: 'Dani',
            mensaje: 'Hola mundo'
        }, function(resp){
            console.log('respuesta server:', resp)
        });

        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor:', mensaje);
        })
 