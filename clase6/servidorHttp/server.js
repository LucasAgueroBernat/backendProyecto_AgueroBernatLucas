const http = require ('http');

//Voy a crear mi primer servidor

const server = http.createServer((req, res) => {
    res.end(`Mi primer hola mundo desde el Backend update4`);
});

//Tenemos que levantar el servidor en algun puerto especifico

server.listen(8080, () => {
    console.log('Listening on port 8080')
});
