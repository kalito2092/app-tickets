const { io } = require('../server');
const { TicketControl } = require('../clases/ticket-control');

let ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        let nuevoticket = ticketControl.siguienteTicket();
        console.log(nuevoticket);
        callback(nuevoticket);
    });

    //emitir evento 'estadoActual'
    client.emit('estadoActual', {
        ticketActual: ticketControl.getUltimoTicket(),
        ultimosCuatro: ticketControl.getUltimosCuatro()
    });


    client.on('atenderTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El número de escritorio es necesario'
            })

        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);

        //broadcast: Emite a todos los ordenadores clientes
        client.broadcast.emit('ultimosCuatro', {
            ultimosCuatro: ticketControl.getUltimosCuatro()
        });

    });



});