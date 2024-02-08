let textoEntrada = "";
let textoSaida = "";
let textoBotaoCopiar = "";

document.getElementById('painel__2').style.display = 'none';

function criptografar() {
    textoEntrada = document.querySelector('textarea').value;
    let resultado = document.getElementById('resultado');

    textoSaida = textoEntrada.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");

    textoBotaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('painel__1').style.display = 'none';
    document.getElementById('painel__2').style.display = 'block';
}

function descriptografar() {
    textoEntrada = document.querySelector('textarea').value;
    let resultado = document.getElementById('resultado');

    textoSaida = textoEntrada.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");

    textoBotaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('painel__1').style.display = 'none';
    document.getElementById('painel__2').style.display = 'block';
}

function copiar() {
    navigator.clipboard.writeText(textoBotaoCopiar);
}

