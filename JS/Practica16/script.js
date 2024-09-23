//Practica 16
function encontrarDivisores(numero) {
let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
    divisores.push(i);
    }
}

return divisores;
}

function divisoresComunes(num1, num2) {
let divisoresNum1 = encontrarDivisores(num1);
let divisoresNum2 = encontrarDivisores(num2);
let comunes = [];

for (let divisor of divisoresNum1) {
    if (divisoresNum2.includes(divisor)) {
    comunes.push(divisor);
    }
}

return comunes;
}

function mostrarDivisoresComunes() {
let numero1 = parseInt(document.getElementById("numero1").value);
let numero2 = parseInt(document.getElementById("numero2").value);

let comunes = divisoresComunes(numero1, numero2);

document.getElementById("resultado").textContent =
    "Los divisores comunes de " +
    numero1 +
    " y " +
    numero2 +
    " son: " +
    comunes.join(", ");
}
