//Practica 15
function encontrarDivisores(numero) {
let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
    divisores.push(i);
    }
}

return divisores;
}

function mostrarDivisores() {
let numeroUsuario = parseInt(document.getElementById("numero").value);

let divisores = encontrarDivisores(numeroUsuario);

document.getElementById("resultado").textContent =
    "Los divisores de " + numeroUsuario + " son: " + divisores.join(", ");
}
