// Console

// log

console.log("Hola, JavaScript")

// error

console.error("Este es un mensaje de error")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida"))

// warn

console.warn("Este es un mensaje de advertencia")

// info

console.info("Este es un mensaje de información adicional")

// table

let data = [
    ["Jesús", 25],
    ["Fran", 25]
]

console.table(data)

data = [
    { name: "Jesús", age: 25},
    { name: "Fran", age: 25}
]

console.table(data)


// group

console.group("Usuario:")
console.log("Nombre: Jesús")
console.log("Edad: 25")
console.groupEnd()

// time

console.time("Tiempo de ejecución") // Así se inicializa

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución") // Hay que darle el texto que le has dado para inicializarlo, de esta manera se finaliza

// assert (Muestra un mensaje de error si lo que evalua es falso)

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")
console.count("Click")
console.count("Clicks")
console.countReset("Click")
console.count("Click")

// trace (Nos sirve para mostrar la pila de ejecución)

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()

// clear (Limpia todo el registro de la consola)

// console.clear()
