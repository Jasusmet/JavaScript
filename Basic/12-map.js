// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name", "Jesús"],
    ["email", "jmclementeperez@gmail.com"],
    ["age", 25]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "Jasusmet")
myMap.set("name", "Jesús Clemente")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("surname"))
console.log(myMap.get("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)


