// if, else, else if

// if (si)

let age = "22"

if (age == 25) {
    console.log("La edad es 25")
}

// else (si no)

if (age == 25) {
    console.log("La edad es 25")
} else {
    console.log("La edad no es 25")
}

// else if (si no, si)

if (age == 25) {
    console.log("La edad es 25")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 25 ni es menor de edad")
}

// Operador ternario

const message = age == 25 ? "La edad es 25" : "La edad no es 25"
console.log(message)

// switch

let day = 3
let dayName

// Esto no es óptimo
if (day == 0) {
    dayName = "Lunes"
} else if (day == 1) {
    dayName = "Martes"
} else if (day == 2) {
    dayName = "Miércoles"
} else if (day == 3) {
    dayName = "Jueves"
} else if (day == 4) {
    dayName = "Viernes"
} else if (day == 5) {
    dayName = "Sábado"
} else if (day == 6) {
    dayName = "Domingo"
}
console.log(dayName)

// Esta es una mejor opción
switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}
console.log(dayName)