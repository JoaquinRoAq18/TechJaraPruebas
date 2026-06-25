//correremos un servidor de fomra local, en el fetch que busca info en el proyecto
//busca que no sea una jerarquia de forma local sino que activa un servidor que pueda 
/*
enrutar y conectar con todas las carpetas de tu proyectpo, fecth apunta a una raiz principal
dominio, la raiz principal en este caso no es tech jara sino toda la ruta, onedriver/usuario/carpeta etc

para esto debemos usar el live server para hacer una simulacion de un servidor dlocal
usar correctamente el funcnionamiento del enrutado de funciones de la pag8ina web
ahora si hacemos el abrir un goLive, abre la pagina  y  abre como principal el index en este caso
TechJara
Se vera de la siguiente manera:
http://127.0.0.1:5500/EJERCICIOS%20VARIOS,%20HTML,%20JS%20y%20CSS/TechJara/TechJara.html
ese numero 127.. es tu ip local o local host, servidor local, los 2 : hace referencia a un puerto para que la página puede desplegarse
de forma local seguido de tu archivo html principal
ahora al levantaer el server de forma lñocal la rauiz ya no es todo lo que viene detras de la carpeta TechJara, ondrive/escritorio,etc
sino que ahora el puerto es tu raiz y el fecth ya no presenta error buscando, error de politicas
hacemos lo siguiente, luegobuscamos una explicacion mas teallada


*/
/*que significa esto? */
document.addEventListener("DOMContentLoaded",() => { //cuando el html termine de cargarse ejecuta este codigo
   //el DOMContentLoaded significa eso ejecuta lo siguiente una vez que el html cargo todo, porque si intenta lo sigueinte antes te dara un resultado null porque aun no existe
    fetch("/paginasComplemento/menuTechJara.html") //ve a buscar el archivo menuTechJara, es similar a un src de una imagen por ejemplo, pero en vez de descargar o adicionar una imagen es un texto
    .then(response => response.text()) //fecth no devuleve el contenido directamente sino una promesa, algo asi "Todavía no tengo el archivo, pero te avisaré cuando llegue."
    //por eso usamos then, cuando el archivo llega despues de usa el fetch
    //response tiene la respuesta pero todavia no es texto, response. text convierte esa respuesta en texto
    .then(data => { //despues aparece este then hace que el data contenga esa respuesta de texto , luego con el documente busca el id
        //ide menu 2 para inyectar la info del data
        document.getElementById("menu2").innerHTML = data;
        //y porque sabe que debe inyectarle a la pagina techJAra , sencillo es porque esta ligda a ella por un src en la misma pagina
    });
});

/*que chucha es el DOM
DOM significa Document Object Model.
la web no trabaj directamente con el texto del html sino que lo combuierte en una estructura
de objetos de memoria
Es como un mapa o una representacion estructurada de la pagina html
cada elemetno html como titulos, parrafos, imagenes, etc. se convierte en un obejto en el DOM
js puede modificar ese dom o la estructura , esta es estatica, por ejemplo con el de arriba
document.getElementByI... dice: busa dentro del dom un elemento cuyo id sea menu2 e inyecta la data

DOCUMENT: El archivo html
Object: Cada elemento dentro del archivo html
MODEL: La estructura organizada que tiene los onjetos entre si, casi siempre ne forma de arbol



*/