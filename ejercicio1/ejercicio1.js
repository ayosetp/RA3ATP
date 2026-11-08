/*
1.  Crea una página web, con la siguiente funcionalidad. Abre una ventana de tamaño 600 X 400,
en la ventana se escribirá la frase "Hoy es dia/mes/año y faltan XX días para fin de año", siendo día, mes, y año , los actuales obtenidos a partir del objeto Date.*/

//Sacamos las variables 
let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth()+1;
let anio = fechaActual.getFullYear();

let finAnio = new Date(anio, 11, 31);
let diferencia = finAnio - fechaActual;
//Nos da el valor en milisegundos por lo que lo pasamos a día, pero con floor para que no se cuente el día empezado como faltante.
let diasRestantes = Math.floor(diferencia / (1000*24*3600));

//El navegador bloquea la página, hay que darle permiso para que se vea y recargar (al menos en Brave, Chrome, Opera)
let ventanaEmergente = window.open("", "_blank", "width=600,height=400");
//He añadido este if para mostrar una alerta si el navegador bloquea la página.
if(ventanaEmergente){
    ventanaEmergente.document.write("Hoy es "+dia+"/"+mes+"/"+anio+" y faltan "+diasRestantes+" días para fin de año");
}else{
    alert("El navegador ha bloqueado la página, hay que darle permiso para que se vea y recargar.\nGracias.");
}