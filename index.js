console.log("Entro a index.js");

const saludar = (nombre, functionCallBack) => {
    console.log("Soy la funcion saludar");
    setTimeout(() => {
        const nombreMayuscula = nombre.toUpperCase();
        functionCallBack(nombreMayuscula);
    },4000);
};

function funcionDeImpresion(parametro) {
    console.log("Soy la funcion de impresion y recibi el parametro:" + parametro);
    console.log("Finalizado el proceso");
}

console.log("Inicio el proceso");
saludar("Jesus", funcionDeImpresion);

// saludar () => {
//     console.log("Callback es una simple funcion")
// };