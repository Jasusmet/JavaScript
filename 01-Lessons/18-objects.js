// Objetos

// Sintaxis

let person = {
    name: "Jesús",
    age: 25,
    alias: "Jasusmet"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Jesús Clemente"
console.log(person.name)

console.log(typeof person.age)
person.age = "25"
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.email = "jmclementeperez@gmail.com"
console.log(person)

person["age"] = 25
console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Jesús",
    age: 25,
    alias: "Jasusmet",
    walk: function () {
        console.log("La persona camina")
    }
}
person2.walk()

// Anidación de objetos

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
console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Jesús Clemente",
    alias: "Jasusmet",
    email: "jmclementeperez@gmail.com",
    age: 25
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for (let value in person4) { // Cuando iteramos con "for in" a lo que accedemos es a las keys únicamente
    console.log(value)
}

for (let key in person4) { // Si queremos acceder a cada una de las keys y values debemos de hacer esto
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person(name, age) { // Aquí creamos un objeto que puede llegar a ser útil cuando quiero crear múltiples instancias, pero debería de ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Jesús", 25)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)

