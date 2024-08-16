//Declaración de variables
var textEntrada = "";
var textoEncriptado = "";
var textoDesencriptado = "";
var patronCaracteres = /^[\u0061-\u007A\u0020]+$/


//Remplazo el elemento en la salida de texto
function remplazaElemento(elemento,texto){


    

}



//Cambia el texto de un elemento de HTML
function cambiatxt(elemento,texto){

    //Crear el objeto de elemento a manipular y cambiar el texto
    let t = document.querySelector(elemento);
    t.innerHTML = texto;

}

//Esta funcion para el reemplazo de una vocal en el texto
function remplazaVocal(vocal){

    switch(vocal){

        case "a" : return "ai";
        case "e" : return "enter";
        case "i" : return "imes";
        case "o" : return "ober";
        case "u" : return "ufat";
    }
    

}


     

//Valida que en el texto introducido por el usuario solo contenga minusculas, sin acentos, ni caracteres especiales



//Esta captura y encripta el texto ingresado por el usuario
function encriptar(){

    

    //Capturar texto
    textEntrada = document.getElementById("entradaTexto").value;
    /* Validar que no se introduscan mayusculas y caracteres 
    especiales y avisar que no se aceptan*/
    if(patronCaracteres.test(textEntrada) == false){

        alert("No se aceptan textos con caracteres en mayusculas, con acentos y especiales como $%. Solo textos con caracteres en minusculas");
        limpiar();
    }
    else{

        //Reemplazar caracteres, se almacena en  textoEncriptado ya que replace entrega el resultado en una nueva cadena
        textoEncriptado = textEntrada.replace(/[aeiou]/g,remplazaVocal);
        console.log(textoEncriptado)

    }
    //Mostrar enpantalla el texto cifrado
    cambiatxt(".salidatxt",textoEncriptado);

}


//Esta función captura y desencripta el texto ingresado por el usuario
function desencriptar(){

    //Capturar texto
    textEntrada = document.getElementById("entradaTexto").value;
     /* Validar que no se introduscan mayusculas y caracteres 
    especiales y avisar que no se aceptan*/
    if(patronCaracteres.test(textEntrada) == false ){

        alert("No se aceptan textos con caracteres en mayusculas, con acentos y especiales. Solo textos con caracteres en minusculas");
        limpiar();
    }
    else{

        textoDesencriptado = textEntrada.replace(/ai/g,"a")
                                        .replace(/enter/g,"e")
                                        .replace(/imes/g,"i")
                                        .replace(/ober/g,"o")
                                        .replace(/ufat/g,"u");

    }
    console.log(textoDesencriptado);
    cambiatxt(".salidatxt",textoDesencriptado);

}

//Limpiar para encriptar un nuevo texto
function limpiar(){

    let mensaje = " Aún no se ha encontrado ningún texto.Introduce el texto para encriptar o desencriptar.";

    document.getElementById("entradaTexto").value = "";
    cambiatxt(".salidatxt",mensaje)
    textoEncriptado = ""
    textoDesencriptado = ""

}

function alerta(){

    alert("Mugrero")

}
