//Comando para establecer la conexion
var socket = io();
var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
$('#num_escritorio').text(escritorio);

socket.on('connect', function() {
    console.log('Usuario conectado');
});


socket.on('disconnect', function() {
    console.log('Usuario desconectado');
});


$('#atenderTicket').on('click', function() {
    socket.emit('atenderTicket', { escritorio }, function(resp) {
        console.log(resp);
        if (!resp.numero) {
            return alert(resp);

        }

        $('#num_ticket').text('ticket: ' + resp.numero);

    });

})