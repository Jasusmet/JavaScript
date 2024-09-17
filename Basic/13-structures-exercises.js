//* 1. Crea un array que almacene cinco animales
let myArray = ["perro", "gato", "loro", "iguana", "pez"]
console.log(myArray)

//* 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("elefante")
myArray.push("tigre")
console.log(myArray)

//* 3. Elimina el que se encuentra en tercera posición
myArray.splice(2, 1)
console.log(myArray)

//* 4. Crea un set que almacene cinco libros
let mySet = new Set(["La comunidad del anillo", "Las dos torres", "El retorno del rey", "El silmarillion", "El hobbit"])
console.log(mySet)

//* 5. Añade dos más. Uno de ellos repetido
mySet.add("Don Quijote de la Mancha", "El hobbit")
console.log(mySet)

//* 6. Elimina uno concreto a tu elección
mySet.delete("Don Quijote de la Mancha")
console.log(mySet)

//* 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])
console.log(myMap)

//* 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMap.has("5")) {
    console.log(`El mes número 5 es ${myMap.get("5")}`);
} else {
    console.log("El mes número 5 no existe en el mapa");
}

//* 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("verano", ["Junio", "Julio", "Agosto"]);
let valorVerano = myMap.get("verano")
console.log(valorVerano)

//* 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray2 = ["manzana", "pera", "manzana", "naranja", "pera"]; // Creamos un array
let mySet2 = new Set(myArray2) // Transformamos el array a un set
let myMap2 = new Map(); // Creamos un map y almacenamos el set en él
myMap2.set("frutas", mySet2)
console.log(myMap2.get("frutas")); // Imprimimos el contenido del map
