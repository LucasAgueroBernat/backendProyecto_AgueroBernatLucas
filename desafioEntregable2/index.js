const { ProductManager } = require('./managers/ProductManager');

const manager = new ProductManager('./files/products.json');

const env = async () => {
    const products = await manager.getProducts();

    //Test evaluando casos bordes y posibles roturas:

    console.log('Comienzo del test, \n (se agregaron casos bordes) \n' ,products , 'Arreglo vacío inicialmente');

    //Agrego el producto 1
    const product1 = {
        title: 'Funco LORD VADER',
        description: 'Star Wars Darth Vader, Marca: Funko-Pop!, Modelo: 543, Producto Original, Nuevo - Cerrado ',
        price: 23000,
        thumbnail: 'ttp2.mlstatic.com/D_NQ_NP_2X_647896-MLA69967639465_062023-F.webp',
        code: 'abc123',
        stock: 25
    }
    await manager.addProduct(product1);

    //Agrego el producto 2
    const product2 = {
        title: 'Funco AHSOKA TANO',
        description: 'Funko Pop Ahsoka 467 Star Wars Special Edition Linea Pop!, Producto Original Funko',
        price: 22000,
        thumbnail: 'http2.mlstatic.com/D_NQ_NP_912640-MLA50844906885_072022-O.webp',
        code: 'xyz999',
        stock: 30
    }
    await manager.addProduct(product2);

    //Agrego el producto 3
    const product3 = {
        title: 'Funco Mandaloriano y Grogu',
        description: 'Funko Pop! - The Mandalorian With The Child 402 - Star Wars',
        price: 32881,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_960485-MLM46708548309_072021-O.webp',
        code: 'asdsda',
        stock: 30
    }
    await manager.addProduct(product3);

    //muestro los  3 productos agregados
    const productsResults1 = await manager.getProducts();
    console.log('\n Agregué 3 productos: \n',productsResults1);

    //intento agregar un producto con un code repetido
    console.log('\n Intento agregar un producto con un código repetido:')
    const product4 = {
        title: 'Funco Anakin Skywalker',
        description: 'Funko Pop Star Wars Clone Wars Anakin Skywalker',
        price: 36200,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_879346-MLA50191404647_062022-O.webp',
        code: 'abc123',
        stock: 10
    }
    await manager.addProduct(product4);

    //intento agregar un producto con campos vacíos
    console.log('\n Intento agregar un producto con campos vacíos:');
    const product5 = {
        description: 'Funko Pop Obi Wan Kenobi Star Wars Maestro Jedi Coleccion',
        code: 'abc12ww3',
        stock: 10
    }
    await manager.addProduct(product5);

    //Muestro en pantalla el producto con id 2
    const userById2 = await manager.getProductById(2);
    console.log('\n Producto con id 2: \n', userById2);

    //Muestro en pantalla el producto con id 1
    const userById1 = await manager.getProductById(1);
    console.log('\n Producto con id 1: \n', userById1);

    //Le hago una actualización al producto con id 2
    const productUpdate = {
        description: 'Funko Pop Ahsoka Tano Star Wars Special Edition Linea Pop!, Producto Original Funko',
        price: 23000,
        stock: 21
    }
    await manager.updateProduct(2, productUpdate);

    //Muestro en pantalla el producto con id 2 actualizado
    const userById2actualizado = await manager.getProductById(2);
    console.log('\n Producto ACTUALIZADO con id 2: ', userById2actualizado);

    //intento hacer una actualización a un producto utilizando un código ya existente en otro producto
    console.log('\n Intento hacer una actualización al producto numero 3 ingresandole un código ya existente:')
    const productUpdate2 = {
        price: 21000,
        code: 'abc123'
    }
    await manager.updateProduct(3, productUpdate2);

    //Muestro todos los productos en pantalla antes de comenzar a eliminar
    const productsResults2 = await manager.getProducts();
    console.log('\n Productos: ', productsResults2);

    //elimino el producto con id 2
    await manager.deleteProduct(2);
    console.log('\n Eliminé el producto con id 2. \n Intento mostrarlo:')
    //intento mostrar en pantalla el producto con id 2
    await manager.getProductById(2);

    //elimino el producto con id 3
    console.log('\n Elimino producto con id 3')
    await manager.deleteProduct(3);

    //intento eliminar un producto con id inexistente
    console.log('\n Intento eliminar producto con id 6: ')
    await manager.deleteProduct(6);

    //Muestro todos los productos en pantalla nuevamente
    const productsResults3 = await manager.getProducts();
    console.log('\n Productos: \n', productsResults3);

    //elimino el producto con id 1
    console.log('\n Elimino producto con id 1, ya no deberían quedar productos')
    await manager.deleteProduct(1);

    //Muestro todos los productos en pantalla nuevamente
    const productsResults4 = await manager.getProducts();

    console.log('\n Productos: \n', productsResults4, '\n FIN DEL TEST');

}

env();