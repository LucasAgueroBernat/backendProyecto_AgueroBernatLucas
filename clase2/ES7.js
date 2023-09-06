//Siempre los nombres de las variables, metodos, funciones deben ser descriptivos
const valoresBase = [1,2,3,4];

// entrada un arreglo --------->> un arrreglo resultado de la misma longitud aplicando x condicion   
const potenciasValoresBase = valoresBase.map((numero, indice) => numero**indice);

console.log(potenciasValoresBase);


//Includes

const nombres=[`Alex`,`Daniel`,`Eleonora`];

nombres.includes(`Daniel`);

if(nombres.includes(`Daniel`)) // true 
{
    console.log(`Tenemos el elemento`)
}else {
    console.log(`No se encuentra el elemento`)
}
 //----> resultado un boolean true o false