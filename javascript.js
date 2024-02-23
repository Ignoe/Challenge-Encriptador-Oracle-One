const campo_texto = document.querySelector("#casilla");
const campo_mensaje = document.querySelector("#resultadoDesencriptado");

//comienza el encriptado
const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
       if (fraseEncriptada.includes(matriz_code[i][0])) { 
        fraseEncriptada = fraseEncriptada.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1]
        );       
    }
imagenMunieco.style.display = "none"
textoCaja.style.display = "none"
botonCopiar.style.display = "block"
resultadoDesencriptado.style.display = "block"
}
 return fraseEncriptada;
}
//termina el encriptado

//comienza el desencriptado
const matriz_code2 = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
]

function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < matriz_code2.length; i++) {
       if (fraseDesencriptada.includes(matriz_code2[i][0])) { 
        fraseDesencriptada = fraseDesencriptada.replaceAll(
            matriz_code2[i][0],
            matriz_code2[i][1]
        );       
    }
 }
 return fraseDesencriptada;
}
//termina el desencriptado

//copiar
const $content = document.getElementById("resultadoDesencriptado")
const $btn = document.getElementById("botonCopiar")

function copiar(){
$content.select();
document.execCommand("copy");
}
//termina copiar



