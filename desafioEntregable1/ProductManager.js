class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        // Validar que no se repita el campo "code"
        const isCodeRepeated = this.products.some(product => product.code === code);
        if (isCodeRepeated) {
            console.log('El producto ya está registrado');
            return;
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    getProductById = (idProduct) => {
        const productoBuscado = this.products.find(product => product.id === idProduct);
        
        if (!productoBuscado) {
            console.log('Producto no encontrado');
            return;
        }

        return productoBuscado; // Devolver el producto buscado
    }
}

//Se crea instancia de la clase "ProductManager"
const manejadorProducts = new ProductManager();

//SE llamara "getProducts" recien creada la instanciadevolvera array vacio. 
console.log( manejadorProducts.getProducts());

//Se llamara al metodo "addProduct" con los sig campos
manejadorProducts.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

//Se llama nuevameente al metodo "getProducts" y aparecera el producto agregado con el ID generado automaticamente
console.log(manejadorProducts.getProducts());

// Volvemos a llamar al método "addProduct" con los mismos campos de arriba, debe arrojar un error porque el código está repetido.
manejadorProducts.addProduct("producto prueba", "Este es un producto repetido", 300, "Sin imagen", "abc123", 15);

//Evaluamos que "getProductById" devuelva error si no encuentra el producto o q devuelva el producto en caso de encontrarlo.
const productoEncontrado = manejadorProducts.getProductById(1); 
if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado);
} else {
    console.log("Producto no encontrado");
}
const productoNoEncontrado = manejadorProducts.getProductById(999); 
if (productoNoEncontrado) {
    console.log("Producto encontrado:", productoNoEncontrado);
} else {
    console.log("Producto no encontrado");
}

