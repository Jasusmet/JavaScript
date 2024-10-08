// 1. Escribe un comentario en una línea
// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Esto es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myname = "Jesús"
let age = 25
let isHuman = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("mysymbol")
let myBigInt = 12314124121241241241241n

// 4. Imprime por consola el valor de todas las variables
console.log("Mi nombre es:", myname)
console.log("Mi edad es:", age)
console.log("¿Soy humano?", isHuman)
console.log("¿Cómo se encuentra el valor?", undefinedValue)
console.log("El valor es:", nullValue)
console.log("Este es mi símbolo:", mySymbol)
console.log("Este es un número entero:", myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myname)
console.log(typeof age)
console.log(typeof isHuman)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myname = "Fran"
age = 30
isHuman = false
undefinedValue = undefined // No se puede cambiar el valor de undefined
nullValue = null // No se puede cambiar el valor de null
mySymbol = Symbol("mysymbol2")
myBigInt = 1231241242445235235n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myname = 45
age = "Juanma"
isHuman = undefined
undefinedValue = true
nullValue = 27
mySymbol = 12314124121241241241241n
myBigInt = Symbol("mysymbol3")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myname2 = "Jesús"
const age2 = 25
const isHuman2 = true
const undefinedValue2 = undefined
const nullValue2 = null
const mySymbol2 = Symbol("mysymbol")
const myBigInt2 = 12314124121241241241241n

// 9. A continuación, modifica los valores de las constantes
/*
const myname2 = "Fran"
const age2 = 24
const isHuman2 = false
const undefinedValue2 = undefined
const nullValue2 = null
const mySymbol2 = Symbol("mysymbol2")
const myBigInt2 = 12314124125241241241241n
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
