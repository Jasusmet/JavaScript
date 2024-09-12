// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Jesús"

if (myName == "Jesús") {
    console.log("Tu nombre es Jesús")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Jasusmet"
let password = "usuario123"

if (user == "Jasusmet" && password == "usuario123") {
    console.log("Usuario y contraseña correctos")
} else {
    console.log("Usuario o contraseña incorrecto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0

if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
let age2 = 18 - age

if (age >= 18) {
    console.log("Puedes votar")
} else if (age < 18) {
    console.log(`Todavía no puedes votar, te faltan ${age2} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
const edad = 18
const message = edad >= 18 ? "Eres un adulto" : "Eres menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 7
let monthName

if (month == 0) {
    monthName = "Enero"
} else if (month == 1) {
    monthName = "Febrero"
} else if (month == 2) {
    monthName = "Marzo"
} else if (month == 3) {
    monthName = "Abril"
} else if (month == 4) {
    monthName = "Mayo"
} else if (month == 5) {
    monthName = "Junio"
} else if (month == 6) {
    monthName = "Julio"
} else if (month == 7) {
    monthName = "Agosto"
} else if (month == 8) {
    monthName = "Septiembre"
} else if (month == 9) {
    monthName = "Octubre"
} else if (month == 10) {
    monthName = "Noviembre"
} else if (month == 11) {
    monthName = "Diciembre"
}
console.log(monthName)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch
switch (month) {
    case 0:
        monthName = "Enero"
        break
    case 1:
        monthName = "Febrero"
        break
    case 2:
        monthName = "Marzo"
        break
    case 3:
        monthName = "Abril"
        break
    case 4:
        monthName = "Mayo"
        break
    case 5:
        monthName = "Junio"
        break
    case 6:
        monthName = "Julio"
        break
    case 7:
        monthName = "Agosto"
        break
    case 8:
        monthName = "Septiembre"
        break
    case 9:
        monthName = "Octubre"
        break
    case 10:
        monthName = "Noviembre"
        break
    case 11:
        monthName = "Diciembre"
        break
    default:
        monthName = "Número de mes incorrecto"
}
console.log(monthName)

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let lang = "0"
let saludo

switch (lang) {
    case 0: 
        saludo = ("Hi")
        break
    case 1:
        saludo = ("Hola")
        break
    case 2:
        saludo = ("Bonjour")
        break
    default:
        saludo = ("We can´t find your language")
}
console.log(saludo)