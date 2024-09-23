//Practica 11
function contarVocales(frase) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contadorVocales = 0;

    for (let letra of frase.toLowerCase()) {
    if (vocales.includes(letra)) {
        contadorVocales++;
    }
    }

    return contadorVocales;
}

function mostrarConteoVocales() {
    let fraseUsuario = document.getElementById("frase").value;
    let totalVocales = contarVocales(fraseUsuario);

    document.getElementById("resultado").textContent = "La frase tiene " + totalVocales + " vocales.";
}
