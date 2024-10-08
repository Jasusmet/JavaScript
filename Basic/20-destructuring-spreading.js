myArray = [1, 2, 3, 4]

let person = {
    name: "Jesús",
    age: 25,
    alias: "Jasusmet"
}

myValue = myArray[1]
console.log(myValue)

myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray // De esta forma desestructuramos el array en diferentes variables
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis de arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray // De esta manera sacamos los elementos que no nos interesen
console.log(myValue10)
console.log(myValue13)

// Sintaxis objetos

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objetos con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email)

// Sintaxis objetos con nuevos nombres de variables

let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objetos anidados

let person3 = {
    name: "Jesús",
    age: 25,
    alias: "Jasusmet",
    walk: function () {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 1,
        work: function () {
            console.log(`La persona de ${this.exp} año de experiencia trabaja`)
        }
    }
}

let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray] // Copia

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objetos

let person4 = { ...person, email: "jmclementeperez@gmail.com" }

console.log(person4)

// Copia de objetos

let person5 = { ...person }

console.log(person5)