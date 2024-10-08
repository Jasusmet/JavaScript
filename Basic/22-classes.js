// Clases

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Jesús", 25, "Jasusmet")
let person2 = new Person("Fran", 25, "Franvi")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Jasusmet"
console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina")
    }

}

let person4 = new PersonWithMethod("Jesús", 25, "Jasusmet")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Jesús", 25, "Jasusmet", "IBAN123456789")

console.log(person5.bank) // No nos muestra el valor porque la propiedad bank es ahora privada gracias al uso de "#"

person5.bank = "awsdf" // Lo único que hace es crear una nueva propiedad que es pública, pero la que ya tenemos y es privada no se puede modificar de esta forma

// Getters y setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() { // Te da la posibilidad de leer el valor de "#name", pero no de reescribirlo
        return this.#name
    }

    set bank(newBank) { // Te da la posibilidad de modificar el valor de "#bank", pero no de leerlo
        this.#bank = newBank
    }

    get bank() {
        return this.#bank
    }

}

person6 = new GetSetPerson("Jesús", 25, "Jasusmet", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"
console.log(person6.bank) // Aquí comprobamos como le hemos cambiado el valor a "#bank"

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau") // De esta manera reescribimos el método heredado de la clase padre
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name) // Seguimos heredando el comportamiento del padre
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("Firulais")
myDog.run()
myDog.sound()

let myFish = new Fish("Nemo", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

// let myClass = new MathOperations() Esto es incorrecto
// console.log(myClass.sum(5,10)) Esto es incorrecto

console.log(MathOperations.sum(5, 10)) // Así es como se hace correctamente

