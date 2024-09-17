//* 1. Crea un bucle que imprima los números del 1 al 20
const numbers = Array.from({ length: 20 }, (_, i) => i + 1); // Creamos un array de números del 1 al 20 utilizando el método "Array.from()",
// posteriormente usaremos una función de callback que recibe un parámetro con un valor ignorado y otro que es el índice del elemento,
// esta función devuelve el valor "i + 1", que es el número que se asignará a cada elemento del array

for (let i = 0; i < numbers.length; i++) { // Creamos un bucle for que itera sobre los elementos del array, inicializándose en 0 y cuya condición es que "i" sea menor que la longitud del array
    console.log(`Elemento: ${numbers[i]}`) // Imprimimos cada elemento del array
}

//* 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0; // Creamos una variable "sum" inicializada en 0, que se utilizará para almacenar la suma de los números

for (let i = 1; i <= 100; i++) { // Luego utilizamos un bucle "for" para iterar desde 1 hasta 100, en cada iteración sumamos el valor actual de "i" a la variable "sum" utilizando el operador "+="
    sum += i;
}
console.log(`La suma de los números del 1 al 100 es: ${sum}`); // Finalmente imprimimos el resultado utilizando "console.log" monstrando la suma de los números del 1 al 100

//* 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) { // Utilizamos un bucle for para iterar desde 1 hasta 50
    if (i % 2 === 0) { // En cada iteración comprobamos si el valor actual de "i" es par utilizando el operador módulo "%"
        console.log(i); // Si el resultado de la división "i" entre 2 es 0, entonces "i" es par y lo imprimimos utilizando "console.log"
    }
}

//* 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const names = ["Jesús", "Fran", "Juanma", "Nerea"]; // Creamos un array de nombres

for (let i = 0; i < names.length; i++) { // Utilizamos un bucle "for" para iterar sobre los elementos del array utilizando "names[i]"
    console.log(`Nombre: ${names[i]}`); // Imprimimos el resultado utilizando "console.log()"
}

//* 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const word = "Onomatopeya"; // Inicializamos un "String" con el valor "Onomatopeya"

let count = 0; // Inicializamos una variable con valor 0

for (let i = 0; i < word.length; i++) { // Utilizamos un bucle "for" para iterar sobre el string
    const char = word[i].toLowerCase(); // Accedemos al carácter actual utilizando "word[i]" y lo convertimos a minúsculas utilizando "toLowerCase()"" para que la búsqueda sea "case-sensitive"
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') { // Verificamos si el carácter es una vocal
        count++; // Incrementamos la variable "count" en 1
    }
}
console.log(`El número de vocales en la cadena es: ${count}`); // Finalmente imprimimos el resultado utilizando "console.log()"

//* 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const otherNumbers = [2, 3, 4, 5, 6]; // Inicializamos un array con números que vamos a usar

let product = 1; // Inicializamos el producto con un valor de 1, ya que el producto de cualquier número por 1 es el mismo número

for (let i = 0; i < otherNumbers.length; i++) { // Utilizamos un bucle "for" para iterar sobre los elementos del array "otherNumbers"
    product *= otherNumbers[i]; // En cada iteración multiplicamos el valor actual de "product" por el elemento actual del array "otherNumbers[i]" utilizando el operador "*="
}
console.log(`El producto de los números es: ${product}`); // Imprimimos el resultado utilizando "console.log()"

//* 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i <= 10; i++) { // Utilizamos un bucle "for" para iterar desde 0 hasta 10
    console.log(`5 x ${i} = ${5 * i}`); // En cada iteración imprimimos una línea que muestra la multiplicación del 5 por el número actual "i" utilizando "console.log()"
}

//* 8. Usa un bucle para invertir una cadena de texto
const originalString = "hello"; // Inicializamos una variable "String" con el valor "hello" 

let reversedString = ""; // Inicializamos una variable "String" como una cadena vacía

for (let i = originalString.length - 1; i >= 0; i--) { // En cada iteración agregamos el carácter actual de la cadena original "originalString[i]"
    reversedString += originalString[i]; // Lo hacemos al final de la cadena invertida "reversedString" utilizando el operador +=
}
// Imprimimos tanto la cadena original como la invertida utilizando "console.log()"
console.log(`La cadena original es: ${originalString}`);
console.log(`La cadena invertida es: ${reversedString}`);

//* 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0; 
let b = 1;
let fibonacciSequence = [a, b]; // Iniciamos la secuencia de Fibonacci con los primeros dos números (0 y 1)

for (let i = 2; i < 10; i++) { // Utilizamos un bucle "for" para generar los siguientes números de la secuencia
  let nextNumber = a + b; // En cada iteración calculamos el siguiente número como la suma de los dos números anteriores
  fibonacciSequence.push(nextNumber); // Lo agregamos a la secuencia y actualizamos los valores de "a" y "b" para la siguiente iteración
  a = b;
  b = nextNumber;
}

console.log(`La secuencia de Fibonacci es: ${fibonacciSequence}`); // Imprimimos el valor de la secuencia de Fibonacci utilizando "console.log()"

//* 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const originalArray = [3, 5, 2, 11, 7, 15, 9, 20, 1, 6]; // Inicializamos un array de números

let filteredArray = []; // Inicializamos un array vacío para mostrar los números filtrados

for (let i = 0; i < originalArray.length; i++) { // Utilizamos un bucle "for" para iterar sobre el array original
  if (originalArray[i] > 10) { // En cada iteración verificamos si el número actual es mayor a 10 utilizando una condición "if"
    filteredArray.push(originalArray[i]); // Si se cumple la condición agregamos el número al array filtrado utilizando el método "push()"
  }
}
// Imprimimos el array original y el filtrado utilizando "console.log()"
console.log(`El array original es: ${originalArray}`);
console.log(`El array filtrado es: ${filteredArray}`);