class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static especie = "humano";

    saludar() {
        console.log(`Hola soy ${this.nombre}, mucho gusto`);
    }

    getEspecie() {
        console.log(`Soy de la especie ${Persona.especie}`);
    }
}

let persona1 = new Persona(`Jorge`);
let persona2 = new Persona(`Catalina`);

persona1.saludar();
persona2.saludar();
persona1.getEspecie();
persona2.getEspecie();
