let textoEntrada = "";
let textoSaida = "";
let textoBotaoCopiar = "";
const regex = "[^a-z ]";

document.getElementById('painel__2').style.display = 'none';

function criptografar() {
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

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
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

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

function validarEntradaCrip(){
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('textoAviso').style.color = '#495057'; 
        criptografar();   
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('painel__1').style.display = 'block';
        document.getElementById('painel__2').style.display = 'none';
        document.getElementById('textoAviso').style.color = '#e63636'; 
    }
}

function validarEntradaDescrip() {
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('textoAviso').style.color = '#495057'; 
       descriptografar();
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('painel__1').style.display = 'block';
        document.getElementById('painel__2').style.display = 'none';
        document.getElementById('textoAviso').style.color = '#e63636'; 
    }
}

