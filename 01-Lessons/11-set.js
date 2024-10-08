// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set([1, 2, 2, 3, 4, 4, 5]) // Un set es similar a un array solo que elimina los valores duplicados

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add(6) // Añade un elemento al final del set (siempre y cuando no este duplicado)

console.log(mySet)

mySet.delete(2) // Elimina un elemento del set

console.log(mySet)

// has

console.log(mySet.has(5)) // Nos dice si se encuentra un elemento en el set

// size

console.log(mySet.size) // Nos dice la longitud del set

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// Los set no admiten duplicados, por lo tanto no se le pueden añadir duplicados

mySet.add(5)
console.log(mySet)