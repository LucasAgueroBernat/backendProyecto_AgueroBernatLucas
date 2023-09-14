const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = []; // Inicializa la lista de productos
    }

    async getProducts() {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                this.products = products; // Actualiza la lista de productos
                return products;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {
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
            stock,
            id: this.products.length + 1, // Asigna un ID único
        };

        this.products.push(product);
        this.saveProductsToFile();
    }

    getProductById(idProduct) {
        const productoBuscado = this.products.find(product => product.id === idProduct);

        if (!productoBuscado) {
            console.log('Producto no encontrado');
            return;
        }

        return productoBuscado; // Devolver el producto buscado
    }

    async updateProduct(producto) {
        try {
            this.products.push(producto);
            this.saveProductsToFile();
            return producto;
        } catch (error) {
            console.log(error);
        }
    }

    async saveProductsToFile() {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'));
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    ProductManager
};
