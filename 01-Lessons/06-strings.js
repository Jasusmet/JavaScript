// Strings

// Concatenación
let myName = "Jesús"
let greeting = "Hola, " +myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Jesús"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Jesús"))
console.log(greeting.includes("Jasusmet"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Jesús", "Jasusmet"))

// Template literals (plantillas literales)
let message = `Hola, este es mi 
curso de JavaScript`
console.log(message) // Manera de hacer un string que se encuentra en más de una línea

let email = "jmclementeperez@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}`) // Manera de insertar una variable dentro de un console.log