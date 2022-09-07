/* const nombres = ["pedro","juan","nacho","martin","joaquin"]; // arrays
console.log(nombres);

console.log(nombres[1]); // muestra array en posicion 1

nombres.splice(3,2); // elimina desde la posicion designada (3) y las cantidades designadas desde esa posicion (2)
console.log(nombres);

nombres.push("carolina"); // agrega al final del array
console.log(nombres);

nombres.unshift("tomas"); // agrega al principio del array
console.log(nombres);

nombres.pop(nombres); // elimina al final del array
console.log(nombres);

nombres.shift(nombres); // elimina al principio del array
console.log(nombres);


console.log(nombres.join(" - ")); // separa los elementos por lo que se indique en el join

console.log(nombres.indexOf("nacho")); // permite encontrar la posicion del array indicado

console.log(nombres.includes("juan")); // busca un elemento indicado dentro del array indicado y responde true or false

nombres.reverse(); // invierte el arrays indicado
console.log(nombres);

 */


//Encontrar un elemento e indicar posicion

/* const encontrarIndex = (array, elemento) => {
    for(let index = 0; index < array.length; index++){
        if(array[index] === elemento){
            return index;
        }
    }

}

const nombres = ["pedro","juan","nacho","martin","joaquin"];
console.log(encontrarIndex(nombres, "martin")); */

//Encontrar un elemento del array y eliminarlo
/* const nombres = ["pedro","juan","nacho","martin","joaquin"];

alert(nombres);

const eliminar = (nombre) => { //funcion
    let index = nombres.indexOf(nombre);
    if(index != -1){
        nombres.splice(index,1);
    }
    
}

let elimina = prompt("A quien quiere eliminar?")

eliminar(elimina);

alert(nombres);

 */


/* for(const item of animales){ // forma de recorrer elementos del array
    console.log(item);
} */

 class Animal{ //clase generadora de animales con estas caracteristicas
    constructor(nombre, tipo, color, raza){
        this.nombre =  nombre;

        this.tipo = tipo;

        this.color = color;

        this.raza = raza;
    }
} 

const animales = [ //arrays
     
    {nombre:"jacinto",tipo:"gato", color:"gris", raza:"otro"},

    {nombre:"polo",tipo:"perro", color:"blanco", raza:"golden"},

    {nombre:"kalu",tipo:"perro", color:"gris", raza:"golden"},

    {nombre:"roman",tipo:"gato", color:"azul", raza:"siames"},
];

//AGREGAR ANIMAL PERDIDO AL ARRAYS
/* alert("Aqui podras poner en busqueda tu animal perdido!"); // alert para agregar animales con las siguientes caracateristicas
  
    let nombre = prompt("Nombre del animal");

    let tipo = prompt("Perro o gato");

    let color = prompt("Color del animal");

    let raza = prompt("Raza");

    
    let agregar = new Animal(nombre, tipo, color, raza); 

    animales.unshift(agregar);
    
    alert(
        `${nombre} fue agregado a la lista de animales perdidos`
      ); */


let busquedaNombre = prompt("Escriba nombre del animal perdido");

let buscar = animales.find(animal => animal.nombre === busquedaNombre);


if(buscar === undefined){
    alert("Animal no encontrado. Lo siento! ")
}
else{
    let mensaje = (`Nombre: ${buscar.nombre}

Tipo: ${buscar.tipo}

Color: ${buscar.color}

Raza: ${buscar.raza}`);

alert(mensaje);}











