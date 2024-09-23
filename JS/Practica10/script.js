//Practica 10
function obtenerVocales(frase) {
  const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  let vocalesEncontradas = [];

  for (let letra of frase.toLowerCase()) {
    if (vocales.includes(letra)) {
      vocalesEncontradas.push(letra);
    }
  }

  return vocalesEncontradas;
}


function mostrarVocales() {
  let fraseUsuario = document.getElementById("frase").value;
  let resultado = obtenerVocales(fraseUsuario);

  if (resultado.length > 0) {
    document.getElementById("resultado").textContent =
      "Las vocales que aparecen son: " + resultado.join(", ");
  } else {
    document.getElementById("resultado").textContent =
      "No se encontraron vocales en la frase.";
  }
}
