//* 1. Crea una clase que reciba dos propiedades
class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    //* 2. Añade un método a la clase que utilice las propiedades
    saludo() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);
    }

    //* 4. Añade un método estático a la primera clase
    static getAverageAge(people) {
        let sum = 0;
        for (let person of people) {
            sum += person.age;
        }
        return sum / people.length;
    }
}

//* 3. Muestra los valores de las propiedades e invoca a la función
const person = new Person("Jesús", 25);

console.log(`Nombre: ${person.name}`);
console.log(`Edad: ${person.age}`);

person.saludo();

//* 4. Usa el método estático
const person1 = new Person("Jesús", 25);
const person2 = new Person("Borja", 28);
const person3 = new Person("Antonio", 28);

const people = [person1, person2, person3];

const averageAge = Person.getAverageAge(people);
console.log(`La edad media es ${averageAge}`);

//* 5. Crea una clase que haga uso de herencia
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // Se extiende de la clase "Person"
        this.major = major;
    }

    study() {
        console.log(`Estoy estudiando ${this.major}`);
    }
}

const student1 = new Student("Jesús", 25, "Desarrollo web");
const student2 = new Student("Borja", 28, "Administración de sistemas");
const student3 = new Student("Antonio", 28, "Ingeniería");

console.log(`Nombre: ${student1.name}`);
console.log(`Edad: ${student1.age}`);
console.log(`Estudios: ${student1.major}`);

//* 6. Crea una clase que haga uso de getters y setters
class BankAccount {
    constructor(saldo = 0) {
        this._saldo = saldo;
    }

    // Getter para el saldo
    get saldo() {
        return this._saldo;
    }

    // Setter para el saldo
    set saldo(value) {
        if (value < 0) {
            throw new Error("El saldo no puede ser negativo");
        }
        this._saldo = value;
    }

    deposit(amount) {
        this.saldo += amount;
    }

    withdraw(amount) {
        if (amount > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= amount;
    }
}

const account = new BankAccount(1000);

console.log(`Saldo inicial: ${account.saldo}`);

account.deposit(500);
console.log(`Saldo después del deposito: ${account.saldo}`);

account.withdraw(200);
console.log(`Saldo después del retiro: ${account.saldo}`);

try {
    account.saldo = -500; // Esto lanzará un error
} catch (error) {
    console.error(error.message);
}

//* 7. Modifica la clase con getters y setters para que use propiedades privadas
class BankAccount2 {
    #saldo; // Propiedad privada

    constructor(saldo = 0) {
        this.#saldo = saldo;
    }

    // Getter para el saldo
    get saldo() {
        return this.#saldo;
    }

    // Setter para el saldo
    set saldo(value) {
        if (value < 0) {
            throw new Error("El saldo no puede ser negativo");
        }
        this.#saldo = value;
    }

    deposit(amount) {
        this.saldo += amount;
    }

    withdraw(amount) {
        if (amount > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= amount;
    }
}

const account2 = new BankAccount2(1000);

console.log(`Saldo inicial: ${account2.saldo}`);

account.deposit(500);
console.log(`Saldo después del deposito: ${account2.saldo}`);

account.withdraw(200);
console.log(`Saldo después del retiro: ${account2.saldo}`);

try {
    account2.saldo = -500; // Esto lanzará un error
} catch (error) {
    console.error(error.message);
}

//* 8. Utiliza los get y set y muestra sus valores
class Person4 {
    #name; // Propiedad privada
    #age; // Propiedad privada

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Getter para el nombre
    get name() {
        return this.#name;
    }

    // Setter para el nombre
    set name(value) {
        this.#name = value;
    }

    // Getter para la edad
    get age() {
        return this.#age;
    }

    // Setter para la edad
    set age(value) {
        if (value < 0) {
            throw new Error("La edad no puede ser negativa");
        }
        this.#age = value;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);
    }
}

const person4 = new Person4("Borja", 28);

console.log(`Nombre: ${person4.name}`);
console.log(`Edad: ${person4.age}`);

person.saludo();

person.name = "Jesús";
person.age = 25;

console.log(`Nombre: ${person4.name}`);
console.log(`Edad: ${person4.age}`);

person.saludo();

//* 9. Sobrescribe un método de una clase que utilice herencia
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("El animal hace un sonido");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    // Sobreescribe el método de "sound"
    sound() {
        console.log(`El ${this.breed} ladra`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    // Sobreescribe el método de "sound"
    sound() {
        console.log(`El gato ${this.color} maulla`);
    }
}

const dog = new Dog("Rayo", "pastor alemán");
const cat = new Cat("Bartolito", "gris");

dog.sound();
cat.sound();