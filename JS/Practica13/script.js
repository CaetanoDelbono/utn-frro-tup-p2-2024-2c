//Practica 13
function esDivisible(numero) {
    if (numero % 2 === 0) {
        return "El número es divisible por 2.";
    } else if (numero % 3 === 0) {
        return "El número es divisible por 3.";
    } else if (numero % 5 === 0) {
        return "El número es divisible por 5.";
    } else if (numero % 7 === 0) {
        return "El número es divisible por 7.";
    } else {
        return "El número no es divisible ni por 2, ni por 3, ni por 5, ni por 7.";
    }
}

function mostrarResultado() {
    let numeroUsuario = parseInt(document.getElementById("numero").value);

    let resultado = esDivisible(numeroUsuario);

    document.getElementById("resultado").textContent = resultado;
}