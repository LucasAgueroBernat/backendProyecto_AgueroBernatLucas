const { ProductManager } = require("./managers/UserManager");

const manager = new ProductManager('./files/Usuarios.JSON');

const env = async () => {
    const productos = await manager.getProduct();
    console.log(usuarios);

    const user = {
        nombre: 'Lucas',
        apellido: 'Aguero',
        edad: 29,
        curso: 'Backend'
    };

    await manager.updateUser(user);

    const productoResultadoFinal = await manager.getUsers();
    console.log(productoResultadoFinal);
}

env();