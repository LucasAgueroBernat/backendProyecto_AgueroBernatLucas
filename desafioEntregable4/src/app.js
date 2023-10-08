import express from "express";
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js';
import { Server } from "socket.io";
import viewsRouter from './routes/views.router.js'

//mierda que necesito para poder usar productmanager acá en app
import ProductManager from './managers/ProductManagers.js'
import path from 'node:path';
const productsFilePath = path.join(__dirname, "./files/products.json");
const productManager = new ProductManager(productsFilePath);

const app = express();

//Toda la configuracion chota de para poder ver el viewsRouter
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');
app.use('/', viewsRouter);

//levanto el server UwU
const server = app.listen(8080, () => console.log('se levantó el puerto 8080'))
const io = new Server(server);
app.set('socketio', io);

io.on('connection', socket => {
    console.log('Nuevo soquete conectado');

    //el soquete del cliente me pasa un producto que el servidor recibe acá
    socket.on('agregarProducto', async (data) => {
        try {

            await productManager.addProduct(JSON.parse(data));
            io.emit('mostrartodo', await productManager.getProducts());
        } catch{
        }
    });

    //el soquete del cliente me pasa un id que el servidor recibe acá para eliminar un producto
    socket.on('eliminarProducto', async (data) => {
        try {
            const id = Number(data)
            await productManager.deleteProduct(id);
            io.emit('mostrartodo', await productManager.getProducts());
        } catch {

        }
    });

});
