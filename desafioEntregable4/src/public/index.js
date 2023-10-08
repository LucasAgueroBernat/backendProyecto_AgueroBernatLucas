const socket = io();

//AGREGAR
const agregarForm = document.getElementById('agregarForm');
const productoInput = document.getElementById('producto');

agregarForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoProducto = productoInput.value;

    // Enviar el nuevo producto al servidor a través de sockets
    socket.emit('agregarProducto', nuevoProducto);

    // Limpiar el campo de entrada
    productoInput.value = '';
});


//ELIMINAR
const eliminarForm = document.getElementById('eliminarForm');
const productIdInput = document.getElementById('productId');

eliminarForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const productId = productIdInput.value;

    // Enviar el ID del producto al servidor a través de sockets
    socket.emit('eliminarProducto', productId);

    // Limpiar el campo de entrada
    productIdInput.value = '';
});



//acá pondré los productos que me pasa el cliente
const cont = document.getElementById('contenedorDeProductos');

socket.on('mostrartodo', data => {
    cont.innerHTML = '';

    data.forEach(prod => {
        cont.innerHTML += `
            <ul>
                <li>${prod.title}</li>
                <li>${prod.price}</li>
                <li>${prod.id}</li>
            </ul>
        `;
    });
});