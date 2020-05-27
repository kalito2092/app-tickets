//Comando para establecer la conexion
var socket = io();

socket.on('connect', function() {
    console.log('Usuario conectado');
});


socket.on('disconnect', function() {
    console.log('Usuario desconectado');
});

socket.on('estadoActual', function(data) {
    $('#lblNuevoTicket').text(data.ticketActual);

});


$('#nexTicket').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        $('#lblNuevoTicket').text(siguienteTicket);

    });

})