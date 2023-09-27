import express from 'express';
import ProductManager from './ProductManager'; 

const app = express();

const productManager = new ProductManager('products.json'); // Asegúrate de que el archivo products.json exista

// Middleware para el manejo de JSON
app.use(express.json());

// Endpoint para obtener productos
app.get('/products', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit); 

    const products = await productManager.getProducts();

    if (isNaN(limit)) {
      res.json(products);
    } else {
      res.json(products.slice(0, limit));
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', async (req, res) => {
  try {
    const pid = parseInt(req.params.pid);
    const product = await productManager.getProductById(pid);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

// Iniciar el servidor
app.listen(8080,()=>console.log("Listening on 8080"))

