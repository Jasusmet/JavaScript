//* 1. Crea un objeto con 3 propiedades
let miObjeto = {
    propiedad1: 'Valor1',
    propiedad2: 2,
    propiedad3: true
};

//* 2. Accede y muestra su valor
let valor1 = miObjeto.propiedad1;
console.log(valor1); // Output: "valor1"

let valor2 = miObjeto.propiedad2;
console.log(valor2); // Output: 2

let valor3 = miObjeto.propiedad3;
console.log(valor3); // Output: true

//* 3. Agrega una nueva propiedad
miObjeto.nuevaPropiedad = 'Nuevo valor';

//* 4. Elimina una de las 3 primeras propiedades
delete miObjeto.propiedad2;

//* 5. Agrega una función e invócala
miObjeto.saludar = function () {
    console.log('Hola, soy un objeto');
};

//* 6. Itera las propiedades del objeto
for (let propiedad in miObjeto) {
    console.log(`${propiedad}: ${miObjeto[propiedad]}`);
}

//* 7. Crea un objeto anidado
miObjeto.anidado = {
    propiedad1: 'valor1',
    propiedad2: true,
    propiedad3: 'valor3'
};

//* 8. Accede y muestra el valor de las propiedades anidadas
console.log(miObjeto.anidado.propiedad1); // Output: valor1
console.log(miObjeto.anidado.propiedad2); // Output: true
console.log(miObjeto.anidado.propiedad3); // Output: valor3

//* 9. Comprueba si los dos objetos creados son iguales
let objeto1 = { a: 1, b: 2 };
let objeto2 = { a: 1, b: 2 };

let sonIguales = true;

for (let propiedad in objeto1) {
    if (objeto1[propiedad] !== objeto2[propiedad]) {
        sonIguales = false;
        break;
    }
}

if (sonIguales) {
    console.log('Los objetos son iguales');
} else {
    console.log('Los objetos no son iguales');
}

//* 10. Comprueba si dos propiedades diferentes son iguales
let miObjeto2 = {
    propiedad1: 'valor1',
    propiedad2: 'valor1'
};

if (miObjeto2.propiedad1 === miObjeto2.propiedad2) {
    console.log('Las propiedades son iguales');
} else {
    console.log('Las propiedades no son iguales');
}