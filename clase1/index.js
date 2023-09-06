function mostrarLista(arr) {
    let mensaje = ""; // Declarar una variable mensaje para almacenar los resultados

    if (!arr.length) {
        mensaje = "Lista Vacia"; // Asignar un valor al mensaje si el arreglo está vacío
    }else {
        arr.forEach((elemento, index) => {
            mensaje += `El mensaje ${index} es ${elemento} /n`; 
        });
        mensaje += `La lista tiene ${arr.length} elementos`; 
    }

    return mensaje;
}

const ListaVacia = mostrarLista([]);
console.log(ListaVacia);
const lista = mostrarLista(["gatito", "perrito"]);
console.log(lista);
