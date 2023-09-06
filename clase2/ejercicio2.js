
class TicketManager {
    #precioBaseGanancia = 0.15;
    precioBasePublica = 0.10;

    static variablePrueba;

    constructor() {
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    agregarEventos = (
        nombre,
        lugar, precio, capacidad = 50, fecha = new Date().toDateString() ) => {
            const evento = {
                nombre,
                lugar,
                precio: precio + precio * this.#precioBaseGanancia,
                capacidad,
                fecha,
                participantes: []
            }
            // [{id: 1, evento: 'Conccierto'}, {id: 2}]
            // Id autoincrementable 1, 2, 3, 4, 5 .......
            // Primer Caso
            // [{id: 1, nombre: 'Evento 1'}, {id: 2, nombre: 'Evento 2'}] Arreglo dejó de estar vacío
            // [1,2,3,4,5] 0 1 2 3 4 longitud del arreglo tenemos 5
            // Nuevamente un llamado a insertar un evento
            // Siempre el último elemento de nuestro arreglo es el que tiene
            // el último id generado
            if (this.eventos.length === 0) {
                evento.id = 1;
            } else {
                evento.id = this.eventos[this.eventos.length - 1].id + 1;
            }

            this.eventos.push(evento);
    }


    //Necesito saber el evento al cual quiero inscribirme // id del evento
    //El participante va a estar representado por un id
    agregarParticipante = (idEvento, idParticipante) => {
        const eventoIndex = this.eventos
            .findIndex(evento => evento.id === idEvento);
        
        if(eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }

        // Validar que el participante no se haya inscrito antes
        const usuarioRegistrado =
             this.eventos[eventoIndex].participantes.includes(idParticipante);
        
        if(usuarioRegistrado) {
            console.log('Usuario ya registrado');
            return;
        }

        this.eventos[eventoIndex].participantes.push(idParticipante);
    }
}

const manejadorEventos = new TicketManager();

//manejadorEventos.agregarParticipante(4, 1234);
//manejadorEventos.agregarEventos('Evento coder 1', 'Argentina', 200, 50000);
//manejadorEventos.agregarEventos('Evento coder 3', 'Argentina', 200);
//manejadorEventos.agregarEventos('Evento coder 2', 'Colombia', 500, 100000);
//manejadorEventos.agregarParticipante(1, 1234);
//manejadorEventos.agregarParticipante(2, 1234);
//manejadorEventos.agregarParticipante(3, 1234);
//manejadorEventos.agregarParticipante(1, 1234);

console.log(manejadorEventos.getEventos());