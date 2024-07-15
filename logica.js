// Se solicita al usuario que ingrese tres números
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));
analizarNumeros(num1, num2, num3);
// Mostrar los números ingresados por el usuario
console.log("Los números ingresados son:");
console.log("Número 1:", num1);
console.log("Número 2:", num2);
console.log("Número 3:", num3);


function analizarNumeros(num1, num2, num3) {
    // Encontrar el número mayor
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }

    // Encontrar el número menor
    let menor = num1;
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }

    // Encontrar el número del centro
    let centro = num1 + num2 + num3 - mayor - menor;

    // Imprimir los números ordenados de mayor a menor y de menor a mayor
    console.log("Números ordenados de mayor a menor:", mayor, centro, menor);
    console.log("Números ordenados de menor a mayor:", menor, centro, mayor);

    // Identificar si los números son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales.");
    } else {
        console.log("Los números no son todos iguales.");
    }
}
