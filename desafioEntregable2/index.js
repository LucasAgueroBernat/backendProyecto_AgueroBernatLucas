const { ProductManager } = require("./managers/UserManager");

const manager = new ProductManager('./files/Usuarios.JSON');

const env = async () => {
    const productos = await manager.getProduct();
    console.log(usuarios);

    const product = {
        title: 'Casco Star Wars',
        description: 'Casco de star wars para todas las edades',
        price: 29.00,
        thumbnails: 'img',
        code:jhkljhklj,
        stock:100,
    };

    await manager.updateUser(user);

    const productoResultadoFinal = await manager.getUsers();
    console.log(productoResultadoFinal);
}

env();