var socket = io();

socket.on('connect', function() {
    console.log('Usuario conectado');
});


socket.on('disconnect', function() {
    console.log('Usuario desconectado');
});


socket.on('estadoActual', function(data) {

    let ultimosCuatro = data.ultimosCuatro;

    ultimosCuatro.forEach((element, index) => {
        let nuevoIndice = index + 1;
        $('#lblTicket' + nuevoIndice).text('Ticket ' + element.numero);
        $('#lblEscritorio' + nuevoIndice).text('Escritorio ' + element.escritorio);


    });

});

socket.on('ultimosCuatro', function(data) {

    let ultimosCuatro = data.ultimosCuatro;

    ultimosCuatro.forEach((element, index) => {
        let nuevoIndice = index + 1;
        $('#lblTicket' + nuevoIndice).text('Ticket ' + element.numero);
        $('#lblEscritorio' + nuevoIndice).text('Escritorio ' + element.escritorio);


    });

    //var audio = new Audio('audio/new-ticket.mp3');
    //audio.play();

})