let texto = document.getElementById("texto");
let tituloMensaje = document.getElementById("titulo-mensaje");
let tituloParrafo = document.getElementById("parrafo");
let imagen = document.getElementById("imagen");
let textoCifrado = texto

function encriptar() {
    let texto = document.getElementById("texto").value
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Mensaje encriptado con éxito";
        tituloParrafo.textContent = "";
        imagen.src = "imagenes/imagen1.png";
    }
    else {
        reiniciar();
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Mensaje desencriptado con éxito";
        tituloParrafo.textContent = "";
        imagen.src = "imagenes/imagen1.png";
    }
    else {
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        tituloParrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        imagen.src = "imagenes/imagen02.png";
    }
}

function eliminarTexto() {
    texto.value = "";
    reiniciar();
}

function copiarTexto() {
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
    reiniciar();
}

function reiniciar() {
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    tituloParrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    imagen.src = "imagenes/imagen0.jpg";
}

