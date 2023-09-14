const fs = require('fs');

class UserManager {
    constructor(path) {
        this.path = path;
    }

    //vamos a obtener los usuarios del archivo Usuarios.json
    getUsers = async () => {
        try {
            if (fs.existsSync(this.path)) {
                //en el caso que exista voy a leer su contenido
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const users = JSON.parse(data);
                return users;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    getUsers = async () => {
        try {
            if (fs.existsSync(this.path)) {
                //en el caso que exista voy a leer su contenido
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const users = JSON.parse(data);
                return users;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    UserManager
}