//Practica 6
document.write("Comparacion de los dos primeros numeros <br>");
var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
    document.write("El número mayor es: " + num1 , "<br>");
} else if (num2 > num1) {
    document.write("El número mayor es: " + num2 , "<br>");
} else {
    document.write("Ambos números son iguales.<br>");
}

//Practica 7
document.write("Comparacion del tercer al quinto numero <br>");
var num3 = parseFloat(prompt("Ingresa el Tercer número:"));
var num4 = parseFloat(prompt("Ingresa el Cuarto número:"));
var num5 = parseFloat(prompt("Ingresa el Quinto número:"));

var mayor = num3; 

if (num4 > mayor) {
    mayor = num4; 
}
if (num5 > mayor) {
    mayor = num5; 
}

document.write("El número mayor es: " + mayor , "<br>");

//Practica 8 
document.write("Ver si un numero es divisible por 2 <br> ")
var num6 = prompt("Ingrese un número:");

num6 = parseInt(num6);

if (num6 % 2 === 0) {
    document.write("El número " + num6 + " es divisible por 2.");
} else {
    document.write("El número " + num6 + " no es divisible por 2.");
}

//Practica 9
function contarLetraA() {
    let frase = document.getElementById("frase").value;

    frase = frase.toLowerCase();

    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === 'a') {
            contador++;
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.textContent = 'La letra "a" aparece ' + contador + ' veces en la frase.';
}


