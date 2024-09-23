// Practica 14
function esDivisible(numero) {
let mensaje = "El número es divisible por: ";
let divisiblePorAlgo = false;

if (numero % 2 === 0) {
    mensaje += "2 ";
    divisiblePorAlgo = true;
}
if (numero % 3 === 0) {
    mensaje += "3 ";
    divisiblePorAlgo = true;
}
if (numero % 5 === 0) {
    mensaje += "5 ";
    divisiblePorAlgo = true;
}
if (numero % 7 === 0) {
    mensaje += "7 ";
    divisiblePorAlgo = true;
}


if (!divisiblePorAlgo) {
    mensaje =
    "El número no es divisible ni por 2, ni por 3, ni por 5, ni por 7.";
}

return mensaje;
}


function mostrarResultado() {
let numeroUsuario = parseInt(document.getElementById("numero").value);


let resultado = esDivisible(numeroUsuario);


document.getElementById("resultado").textContent = resultado;
}
