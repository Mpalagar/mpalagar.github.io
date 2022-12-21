// Generar GIF de los libros
//Generar color aleatorio
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// Genera color aleatorio
function changeBackgroundColor() {
    var colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor = generateRandomColor();
}
// Camia el texto a través de textBg
function changeBackgroundText() {
    var textBg = document.getElementById("text-bg");
    if (textBg.innerHTML == "LIFE") {
        textBg.innerHTML = "IN";
    } else if (textBg.innerHTML == "IN") {
        textBg.innerHTML = "BOOKS";
    } else if (textBg.innerHTML == "BOOKS") {
        textBg.innerHTML = "LIFE";
    }
}
// Cambia el fondo 
function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
    changeBackgroundText2();
    changeBackgroundColor2();
}
// Que lo haga cada 650ms
setInterval(changeBackground, 650);

// Para el gif2
function changeBackgroundColor2() {
    var colorBg2 = document.getElementById("color-overlay2");
    colorBg2.style.backgroundColor = generateRandomColor();
}
function changeBackgroundText2() {
    var textBg2 = document.getElementById("text-bg2");
    if (textBg2.innerHTML == "A") {
        textBg2.innerHTML = "LIMITLESS";
    } else if (textBg2.innerHTML == "LIMITLESS") {
        textBg2.innerHTML = "WORLD";
    } else if (textBg2.innerHTML == "WORLD") {
        textBg2.innerHTML = "A";
    }
}

//INTERACCIÓN PARA ELECCIÓN ALEATORIA
// Generar una recomendación aleatoria a través de un número
function generaunnumeroaleatorio() {
    return  Math.floor(Math.random() * 6); // genera números del 0 al 5
}

// Función elegir libro
function elegirlibro(){
     recomendacion = 0;
     eleccion = generaunnumeroaleatorio();
     contedo = 0;
     
    switch (eleccion){
        case 0:
            recomendacion = document.querySelector("#producto1 .nombre").innerText;
            break;
        case 1:
            recomendacion = document.querySelector("#producto2 .nombre").innerText;
            break;
        case 2:
            recomendacion = document.querySelector("#producto3 .nombre").innerText;
            break;
         case 3:
            recomendacion = document.querySelector("#producto4 .nombre").innerText;
            break;
         case 4:
            recomendacion = document.querySelector("#producto5 .nombre").innerText;
             break;
         case 5:
             recomendacion = document.querySelector("#producto6 .nombre").innerText;
            break;
        
        }
    
        limpiaranterior();
        añadirrecomendacion(recomendacion);
    }

    function limpiaranterior() {
        document.getElementById("solucion").innerHTML = null;
        document.getElementById("libros").style.display="none";
    }
    
    function añadirrecomendacion(recomendacion) {
        let list = document.getElementById("solucion");
        document.getElementById("libros").style.display="flex";
        list.innerHTML = list.innerHTML + "<p>" + recomendacion  + "</p>";
    }


// PRÉSTAMOS

// Variables para el numero de clicks que serán globales
var n_clicks_b1 = 0;
var n_clicks_b2 = 0;
var n_clicks_b3 = 0;
var n_clicks_b4 = 0;
var n_clicks_b5 = 0;
var n_clicks_b6 = 0;
var precioprestamo = 0;

function sumaprecios() {
    Precioproducto1 =15;
    Precioproducto2 =12;
    Precioproducto3 =20;
    Precioproducto4 =10;
    Precioproducto5 =15;
    Precioproducto6 =50;

    precioprestamo = n_clicks_b1 * Precioproducto1 + n_clicks_b2* Precioproducto2 + n_clicks_b3 * Precioproducto3 + n_clicks_b4 *Precioproducto4 + n_clicks_b5 * Precioproducto5 + n_clicks_b6 * Precioproducto6;
    guardado1 =n_clicks_b1;
    guardado2 =n_clicks_b2;
    guardado3 =n_clicks_b3;
    guardado4 =n_clicks_b4;
    guardado5 =n_clicks_b5;
    guardado6 =n_clicks_b6;

    console.log(precioprestamo);
    alert(`El valor del préstamo es: ${precioprestamo}\$`);
    diasminimos(guardado1,guardado2,guardado3,guardado4,guardado5,guardado6);

}


function diasminimos(n_clicks_b1,n_clicks_b2,n_clicks_b3,n_clicks_b4,n_clicks_b5,n_clicks_b6){
    numerobotones=6;
    precio1=19;
    precio2=22;
    precio3=20;
    precio4=10;
    precio5=9;
    precio6=15;
    const Arrayprecios = new Array(numerobotones);
    
    //Iniciar el array con valores a 0
    
    if(n_clicks_b1 != 0){
        Arrayprecios[0]=19;
    }
    if(n_clicks_b2 != 0){
        Arrayprecios[1]=22;
    }
    if(n_clicks_b3 != 0){
        Arrayprecios[2]=20;
    }
    if(n_clicks_b4 != 0){
        Arrayprecios[3]=10;
    }
    if(n_clicks_b5 != 0){
        Arrayprecios[4]=9;
    }
    if(n_clicks_b6 != 0){
        Arrayprecios[5]=15;
    }
    var diasminimos = 1000;
    for(let j=0;j<numerobotones;j++){
        
        if(Arrayprecios[j]<diasminimos)
        {
            diasminimos = Arrayprecios[j];
        }

    }
    if(diasminimos!=0){
        console.log(diasminimos);
        alert(`Dias para la devolución obligatoria: ${diasminimos}\dias`);
    }else{
    alert(`no ha seleccionado nada aun`);
    }


}


function clicks1() {
    let boton1 = document.getElementsByClassName('boton1');
    n_clicks_b1 += 1;
    boton1.innerHTML = n_clicks_b1;
    let nombre = document.querySelector("#producto1 .nombre").innerText;
    let precio = document.querySelector("#producto1 .precio").innerText;
    let dias  = document.querySelector("#producto1 .dias").innerText;
    añadirLibro(nombre, precio, dias);
}

function clicks2() {
    let boton2 = document.getElementsByClassName('boton2');
    n_clicks_b2 += 1;
    boton2.innerHTML = n_clicks_b2;
    let nombre = document.querySelector("#producto2 .nombre").innerText;
    let precio= document.querySelector("#producto2 .precio").innerText;
    let dias  = document.querySelector("#producto2 .dias").innerText;
    añadirLibro(nombre, precio, dias);
}

function clicks3() {
    let boton3 = document.getElementsByClassName('boton3');
    n_clicks_b3 += 1;
    boton3.innerHTML = n_clicks_b3;
    let nombre = document.querySelector("#producto3 .nombre").innerText;
    let precio = document.querySelector("#producto3 .precio").innerText;
    let dias  = document.querySelector("#producto3 .dias").innerText;
    añadirLibro(nombre, precio, dias);
}

function clicks4() {
    let boton4 = document.getElementsByClassName('boton4');
    n_clicks_b4 += 1;
    boton4.innerHTML = n_clicks_b4;
    let nombre = document.querySelector("#producto4 .nombre").innerText;
    let precio = document.querySelector("#producto4 .precio").innerText;
    let dias  = document.querySelector("#producto4 .dias").innerText;
    añadirLibro(nombre, precio, dias);
}

function clicks5() {
    let boton5 = document.getElementsByClassName('boton5');
    n_clicks_b5 += 1;
    boton5.innerHTML = n_clicks_b5;
    let nombre = document.querySelector("#producto5 .nombre").innerText;
    let precio = document.querySelector("#producto5 .precio").innerText;
    let dias  = document.querySelector("#producto5 .dias").innerText;
    añadirLibro(nombre, precio, dias);
}


function clicks6() {
    let boton6 = document.getElementsByClassName('boton6');
    n_clicks_b6 += 1;
    boton6.innerHTML = n_clicks_b6;
    let nombre = document.querySelector("#producto6 .nombre").innerText;
    let precio= document.querySelector("#producto6 .precio").innerText;
    let dias = document.querySelector("#producto6 .dias").innerText;
    añadirLibro(nombre, precio, dias);
}

function cancelarprestamo() {
    n_clicks_b1 = 0;
    n_clicks_b2 = 0;
    n_clicks_b3 = 0;
    n_clicks_b4 = 0;
    n_clicks_b5 = 0;
    n_clicks_b6 = 0;
    document.getElementById("list").innerHTML = null;
    document.getElementById("items").style.display="none";
}

function añadirLibro(nombre, precio, dias) {
    let list = document.getElementById("list");
    document.getElementById("items").style.display="flex";
    list.innerHTML = list.innerHTML + "<li>" + nombre + " - " + precio + "</li>" + " - euros-" + dias + " - dias " + "</li>";
}