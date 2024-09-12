// array

// Declaración

let myArray = [] // Es recomendable usarlo así, de esta manera asignamos valores a la variable
let myArray2 = new Array() // De esta manera asignamos huecos para valores

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = ["Jesús", "Clemente", "Jasusmet", 25, true]
myArray2 = new Array("Jesús", "Clemente", "Jasusmet", 25, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Jesús"
myArray2[1] = "Clemente"
myArray2[2] = "Jasusmet"

console.log(myArray2)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Jesús") // Agrega elementos al final del array
myArray.push("Clemente")
myArray.push("Jasusmet")
myArray.push("25")

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Jesús", "Jasusmet") // Agrega elementos al principio del array
console.log(myArray)

// length

console.log(myArray.length) // Nos muestra la longitud del array

// clear

myArray = [] // De esta manera borramos los valores almacenados en el array
myArray.length = 0 // Alternativa que es mejor no utilizar
console.log(myArray)

//slice

myArray.push("Jesús", "Clemente", "Jasusmet", 25, true)

let myNewArray = myArray.slice(1, 3) // Coge los elementos que se encuentren entre los indicados del array

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3) // Elimina desde el primer elemento indicado (1) una cantidad indicada (3)
console.log(myArray)

myArray = ["Jesús", "Clemente", "Jasusmet", "Jasusmet", 25, true]

myArray.splice(1, 2, "Nueva entrada") // A partir del primer elemento elimina el segundo, reemplaza el tercero y deja lo que sigue como está
console.log(myArray)

