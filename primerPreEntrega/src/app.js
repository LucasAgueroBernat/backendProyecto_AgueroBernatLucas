import express from "express";
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import { __dirname } from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/static-files', express.static(`${__dirname}/public`));
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);





app.listen(8080, () => console.log('Listening on port 8080'));