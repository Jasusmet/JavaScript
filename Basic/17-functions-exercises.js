//* 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)

//* 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function findMaxNumber(numbers) {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}

const numbers = [3, 5, 2, 11, 7, 15, 9, 20, 1, 6];
const maxNumber = findMaxNumber(numbers);
console.log(`El mayor número es: ${maxNumber}`);

//* 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(string) {
    let vocales = 'aeiouAEIOU';
    let contar = 0;
    for (let i = 0; i < string.length; i++) {
        if (vocales.includes(string[i])) {
            contar++
        }
    }
    return contar;
}

console.log(contarVocales("Hello World"));

//* 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function uppercaseStrings(arr) {
    return arr.map(str => str.toUpperCase());
}

const inputArray = ["hello", "world", "javascript"];
const outputArray = uppercaseStrings(inputArray);
console.log(outputArray);

//* 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(25));
console.log(isPrime(23));

//* 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function commonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const common = commonElements(arr1, arr2);
console.log(common);

//* 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(arr));

//* 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function squareNumbers(array) {
    return array.map(num => num ** 2);
}

const array = [1, 2, 3, 4, 5];
console.log(squareNumbers(array));

//* 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

const str = "Hello World JavaScript";
console.log(reverseWords(str));

//* 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const num = 5;
console.log(factorial(num));