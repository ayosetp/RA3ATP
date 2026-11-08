/*
2. Vamos utilizar nuestros conocimientos de manipulación de cadenas en javascript, para crear un algoritmo de compresión de cadenas.
El algoritmo consiste en sustituir rachas de caracteres repetidos por el número de repeticiones seguido del carácter. 
El algoritmo sólo actúa con cadenas de caracteres del alfabeto, por lo que arrojará un mensaje de error en caso de que la cadena contenga números. 
Si admite espacios, en cuyo caso se sustituirá el espacio por una interrogación "?".
Ejemplos de prueba:
Cadena de entrada: "holaaaa mundo" se transforma en "hol4a?mundo"
Cadena de entrada: "aaabbcaaaa" se transforma en "3a2bc4a"
 a). Crea una función de compresión que recibe la cadena y devuelve la cadena comprimida.
 b). Crea una función de descompresión que recibe una cadena en formato comprimido y devuelve la cadena original.*/

let cadena; 

cadena = prompt("Introduce una frase sin números");
if(validacion(cadena)){

    let comprimido = comprimir(cadena);
    let descomprimido = descomprimir(comprimido);
    document.write("<h1> Cadena original: "+cadena+"</h1>")
    document.write("<h1> Comprimir: "+comprimido+"</h1>");
    document.write("<h1> Descomprimir: "+descomprimido+"</h1>");
}

//Función para validar el texto, hacemos uso de una expresión regular para que todo carácter que no sea entre a-z o un espacio en blanco sea considerado inválido. 
function validacion(texto){
    if(texto === null){
        alert("Le has dado a cancelar.");
        return false;
    }
    //let contador = 0;
    for(let i = 0; i < texto.length; i++){
        let caracter = texto.charAt(i);
        if(!/^[a-zA-Z ]$/.test(caracter) ){
            alert("Carácteres invalidos en la cadena.");
            return false;
        }
        //contador++;
        
    }
    return true;
    //El contador lo use para verificación, lo dejo como parte del desarrollo.
    //return alert("Validación completada correctamente. Tienes " + contador + " carácteres analizados de " + cadena.length + " carácteres.");

} 
//La función para comprimir el texto.
function comprimir(texto){
    //He tenido que añadir un número al final del texto un 1 porque voy a imprimir la letra anterior.
    texto = texto + 1;
    let textoNuevo = "";
    let contador = 1;
    //Necesitamos comparar la letra anterior para saber si hay dos iguales y como al principio de la cadena no hay letra y no admitimos números le pongo el 1.
    let letraAnterior = "1";
    
    for(let i = 0; i < texto.length; i++){
        let letraActual = texto.charAt(i);
        
        //Si las letras son iguales se incrementa el contador, si son diferentes se pasa a escribir la letra anterior tras el contador si este es mayor de 1.
        if(letraActual == letraAnterior){
            contador++;
        }else if(contador > 1){
            textoNuevo = textoNuevo + contador;
            textoNuevo = textoNuevo + letraAnterior;
            contador = 1;
        }else{
            if(letraAnterior != "1"){
                textoNuevo = textoNuevo + letraAnterior;
            }

        }
        letraAnterior = letraActual;

    }

    return textoNuevo = textoNuevo.replaceAll(' ', '?');
}


function descomprimir(texto){

    let textoNuevo = "";
    //document.write(texto);
    for(let i = 0; i < texto.length; i++){
        let caracter = texto.charAt(i);
        if(/\d/.test(caracter)){
            let numeroEntero = caracter;
            //while añadido para contemplar números de dos o más cifras.
            while(i + 1 < texto.length && /\d/.test(texto.charAt(i+1))){
                i++;
                numeroEntero += texto.charAt(i);
            }

            //Si el carácter es un número se repetirá el siguiente carácter tantas veces como índica el número pero restando -1 porque luego se pintará el carácter que le sigue.
            for(let j = 0;j < Number(numeroEntero)-1; j++){
                textoNuevo = textoNuevo + texto.charAt(i+1);
            }
        }else{
            textoNuevo = textoNuevo + texto.charAt(i);
        }
    }
    return textoNuevo = textoNuevo.replaceAll('?', ' ');

}

