//Declaración de variables
var textEntrada = "";
var textoEncriptado = "";
var textoDesencriptado = "";
var patronCaracteres = /^[\u0061-\u007A\u0020]+$/



//Cambia el texto de un elemento de HTML
function cambiatxt(elemento,texto){

    //Crear el objeto de elemento a manipular y cambiar el texto
    let t = document.querySelector(elemento);
    t.innerHTML = texto;

}

//Función para el reemplazo de una vocal en el texto
function reemplazaVocal(vocal){

    switch(vocal){

        case "a" : return "ai";
        case "e" : return "enter";
        case "i" : return "imes";
        case "o" : return "ober";
        case "u" : return "ufat";
    }
    

}

//Función para capturar y encriptar el texto ingresado por el usuario
function encriptar(){

    

    //Capturar texto
    textEntrada = document.getElementById("entradaTexto").value;

    //Validar que se introduzca texto
    if(textEntrada == ""){

        alert("Debes ingresar un texto para encriptarlo");
        reiniciar();
    }
    else{

         //Validar que no se introduscan mayusculas y caracteres especiales
        if(patronCaracteres.test(textEntrada) == false){

            alert("No se aceptan textos con mayusculas, acentos ni caracteres especiales");
            reiniciar();
        }
        else{

            //Reemplazar caracteres
            textoEncriptado = textEntrada.replace(/[aeiou]/g,reemplazaVocal);
            console.log(textoEncriptado);

            //Mostrar enpantalla el texto cifrado
            cambiatxt(".resultado",textoEncriptado);

            //Quitar imagen y mensaje en salida de texto
            let elemento = document.getElementById("divimg");
            elemento.remove();
            
        }
    }

}


//Función para capturar y desencriptar el texto ingresado por el usuario
function desencriptar(){

    let llave = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]

    //Capturar texto ingresado por elusuario
    textEntrada = document.getElementById("entradaTexto").value;
    console.log("textentrada = "+textEntrada);

    if(textEntrada == ""){

        alert("Debes ingresar un texto encriptado");
        reiniciar();
    }
    else{

        //Validar que no se introduscan mayusculas y caracteres especiales 
        if(patronCaracteres.test(textEntrada) == false ){

            alert("No se aceptan textos con mayusculas, acentos ni caracteres especiales")
        
        }
        else{

            //Recorre el arreglo de llaves y reemplaza el caracter cifrado
            for(i = 0;i < llave.length;i++){

                if(textEntrada.includes(llave[i][1])){

                    textEntrada = textEntrada.replaceAll(llave[i][1],llave[i][0])
                }

            }

            console.log(textEntrada);
            textoDesencriptado = textEntrada
            cambiatxt(".resultado",textoDesencriptado);
            /*cambiatxt(".salidatxt","");*/
            let elemento = document.getElementById("divimg");
            elemento.remove();
                                     
        }
    } 
    
}

//Reiniciar para encriptar un nuevo texto
function reiniciar(){

    let mensaje = " Aún no se ha encontrado ningún texto. Introduce el texto para encriptar o desencriptar.";

    document.getElementById("entradaTexto").value = "";
    cambiatxt(".resultado","");
    cambiatxt(".salidatxt",mensaje);
    textoEncriptado = "";
    textoDesencriptado = "";


}

//Funcion para copiar texto
function copiarTexto(){

    if(textEntrada == ""){

        alert("Sin texto para copiar. Ingresa un texto.");
        
    }
    else{

        let txt = document.getElementById("txt").innerText;
        navigator.clipboard.writeText(txt).then(alert("Texto copiado"));  

    }
   
}
