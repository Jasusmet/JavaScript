// 1. Concatena dos cadenas de texto
let myName = "Jesús"
let myAge = "25"
console.log(`Hola ${myName}, tienes ${myAge} años`)

// 2. Muestra la longitud de una cadena de texto
console.log(myName.length)

// 3. Muestra el primer y último carácter de un string
let message = "Hola me llamo Jesús"
console.log(message[0])
console.log(message[message.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(message.toUpperCase())
console.log(message.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let message2 = `Hola, este es mi 
curso de JavaScript`
console.log(message2)

// 6. Interpola el valor de una variable en un string
console.log(`Hola ${myName}, tienes ${myAge} años`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let nuevoMessage = message.replace(/\s+/g, "-");
console.log(nuevoMessage); // Imprime "Hola-me-llamo-Jesús"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message.includes("Jesús"))

// 9. Comprueba si dos strings son iguales
let string1 = "Hola mundo"
let string2 = "Hola mundo"
console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length)
console.log(string2.length)
console.log(string1.length === string2.length)