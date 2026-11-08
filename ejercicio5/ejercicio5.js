/*5. Crea una web que escriba por pantalla la siguiente información del usuario
tipoDispositivo: "movil" si anchoPantalla < 768, "tablet" si anchoPantalla >= 768 && anchoPantalla < 1024, o "escritorio" si es mayor o igual a 1024.
resolucionPantalla: Cadena formateada "${anchoPantalla}x${altoPantalla}" (ej: "1920x1080").
orientacionPantalla: "horizontal" si anchoPantalla >= altoPantalla, o "vertical" si el alto supera al ancho.
idiomaPrincipal: Los 2 primeros caracteres en minúsculas de idiomaNavegador. (ej: "es" de "es-ES").
protocoloSeguro: Si esConexionSegura es true asigna "https:", de lo contrario "http:".*/
    
//Obtenemos tamaño de la pantalla.
const anchoPantalla = screen.width;
const altoPantalla = screen.height;

//Obtenemos el tipo de dispositivo.
let tipoDispositivo = "";
if (anchoPantalla < 768) {
  tipoDispositivo = "movil";
} else if (anchoPantalla >= 768 && anchoPantalla < 1024) {
  tipoDispositivo = "tablet";
} else {
  tipoDispositivo = "escritorio";
}

//Formato de la pantalla.
const resolucionPantalla = `${anchoPantalla}x${altoPantalla}`;

//Usamos el ternario para comprobar si está en horizontal o vertical.
const orientacionPantalla = (anchoPantalla >= altoPantalla) ? "horizontal" : "vertical";

//Formateamos el idioma
const idiomaNavegador = navigator.language || "es-ES";
//Usamos slice como recomienda la página de apoyo
const idiomaPrincipal = idiomaNavegador.slice(0, 2).toLowerCase();

//Determinamos el protocolo
const esConexionSegura = window.location.protocol === "https:";
const protocoloSeguro = esConexionSegura ? "https:" : "http:";

//Mostramos los datos en una lista.
document.write("<h1>Información del usuario</h1>"); 
document.write("<ul>");   
document.write("<li>tipoDispositivo: " + tipoDispositivo + "</li>");
document.write("<li>resolucionPantalla: " + resolucionPantalla + "</li>");  
document.write("<li>orientacionPantalla: " + orientacionPantalla + "</li>");  
document.write("<li>idiomaPrincipal: " + idiomaPrincipal + "</li>");  
document.write("<li>protocoloSeguro: " + protocoloSeguro + "</li>");  
document.write("</ul>");   
