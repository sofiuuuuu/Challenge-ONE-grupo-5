const ingresotexto = document.querySelector(".ingresotexto")
const solucion = document.querySelector(".solucion")
const llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
function evento(){
    const textoproblema = encriptar(ingresotexto.value);
    solucion.value = textoproblema
    ingresotexto.value = "";
    solucion.style.backgroundImage = "none";
}
function encriptar (mensajeEncriptado) {

    mensajeEncriptado=mensajeEncriptado.toLowerCase()

    for (let i=0; i<llaves.length; i++){
          mensajeEncriptado=mensajeEncriptado.replaceAll(llaves[i][0], llaves[i][1])
    }
    return mensajeEncriptado
}

function eventodesencrptar() {
    const textoproblema = desencriptar(ingresotexto.value);
    solucion.value = textoproblema
    ingresotexto.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar (mensajeDesencriptado) {

    mensajeDesencriptado=mensajeDesencriptado.toLowerCase()

    for (let i=llaves.length-1; i>=0; i--){
        mensajeDesencriptado=mensajeDesencriptado.replaceAll(llaves[i][1], llaves[i][0])
    }
    return mensajeDesencriptado
}

function copiar() {
    navigator.clipboard.writeText(solucion.value)
}
