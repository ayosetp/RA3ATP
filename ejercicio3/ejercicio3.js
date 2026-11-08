/*3. Crea una web, que la primera que un usuario entra le pregunta que idioma quiere, ingles (EN) O español (ES).
    a) La web mostrará un texto en el idioma seleccionado.
    b) Si el usuario ya accedió anteriormente a la web, no le pregunta nada y muestra la web en el idioma seleccionado previamente.
    c) En el campo de entrada sólo se puede introducir EN o ES, informando del error en caso contrario, y volviendo a solicitar el valor.*/

//Obtener los datos guardados usando localStorage.
let idiomaGuardado = localStorage.getItem("idiomaSeleccionado");
let idioma = idiomaGuardado;
//Si no hay datos porque es la primera vez se piden.
if(!idiomaGuardado){
   idioma = prompt("Seleccione un idioma/Select a language: ES -> Español | EN -> English");

    //Si no se ha cancelado se limpia y pasa a mayúsculas .
    if(idioma != null){
        idioma = idioma.trim().toUpperCase();
    }
    //Con un while verificamos el idioma y si no es correcto se vuelve a pedir.
    while(idioma != "ES" && idioma != "EN"){
        alert("Error: sólo se admite Es o EN/ Error: only admit EN or ES: ");
        idioma = prompt("Seleccione un idioma/Selection a language: es -> Español | en -> English");
        if(idioma != null){
            idioma = idioma.trim().toUpperCase();
        }
    } 
    //Finalmente introducimos en el localStorage el idiomaSeleccionado y su valor.
    localStorage.setItem("idiomaSeleccionado", idioma);
}

//Mostramos el texto en el idioma elegido o que el usuario tenga guardado.
if(idioma === "ES"){
    document.write("<h1>Lo siento, no hablo español. Prueba en Inglés, gracias.</h1>");
}else{
    document.write("<h1>Sorry, I don't speak english. Try spanish, thanks.</h1>");
}









