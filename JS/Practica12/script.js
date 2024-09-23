//Practica 12
function contarCadaVocal(frase) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    let conteoVocales = {
    a: 0, e: 0, i: 0, o: 0, u: 0, á: 0, é: 0, í: 0, ó: 0, ú: 0
    };

    for (let letra of frase.toLowerCase()) {
    if (vocales.includes(letra)) {
        conteoVocales[letra]++;
    }
    }
    return conteoVocales;
}


function mostrarConteoCadaVocal() {
    let fraseUsuario = document.getElementById("frase").value;
    let conteo = contarCadaVocal(fraseUsuario);

    let mensaje = `A: ${conteo['a']}<br>
                   E: ${conteo['e']}<br>
                   I: ${conteo['i']}<br>
                   O: ${conteo['o']}<br>
                   U: ${conteo['u']}`;
    
    document.getElementById("resultado").innerHTML = mensaje;
}