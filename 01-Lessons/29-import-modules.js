// Importación de módulos

import { add, PI, name, Circle } from "./28-export-modules.js" // Importación genérica

import defaultImport from "./28-export-modules.js" // Importación por defecto, solo lo usamos cuando vamos a importar una única cosa, pero no todo es exportable por defecto

// Funciones

console.log(add(5, 10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js" // De esta manera hacemos un import desde cualquier fichero