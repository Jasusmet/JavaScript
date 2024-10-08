// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 10

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5)
console.log(5 < 10)
console.log(10 >= 7)
console.log(7 <= 10)
console.log(10 == 10)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 10)
console.log(10 < 5)
console.log(2 >= 7)
console.log(20 <= 10)
console.log(20 == 10)

// 5. Utiliza el operador lógico and
console.log(5 > 10 && 15 > 20)

// 6. Utiliza el operador lógico or
console.log(5 > 10 || 15 > 20)

// 7. Combina ambos operadores lógicos
console.log(5 > 10 && 15 > 20 || 30 < 40)

// 8. Añade alguna negación
console.log(!(5 > 10 && 15 > 20 || 30 < 40))

// 9. Utiliza el operador ternario
const isMonday = true
isMonday ? console.log("Hoy es lunes") : console.log("Hoy no es lunes")

// 10. Combina operadores aritméticos, de comparación y lógicas
let c = 10
let d = 20
console.log(c + d)
console.log(c <= d)
console.log(a > b && c > d)