let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO=80;
const ANCHO_GATO=50;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;

let gatoX=canvas.width/2-(ANCHO_GATO/2);
let gatoY=(canvas.height/2-ALTO_GATO/2);
let comidaX=0;
let comidaY=0;
let imgRata = new Image();
imgRata.src = "rata.png";
let imgGato = new Image();
imgGato.src = "gato.png";
let puntos=0;
let tiempoMaximo=15;
let tiempo=tiempoMaximo;
let intervalo;

function graficarGato(){
    // ctx.drawImage(imagen, posicionX, posicionY, ancho, alto)
    ctx.drawImage(imgGato, gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}
function crearComida(){
    // ctx.drawImage(imagen, posicionX, posicionY, ancho, alto)
    ctx.drawImage(imgRata, comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function iniciarJuego(){
    intervalo = setInterval(restarTiempo, 1000);
    graficarGato();
    crearComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function actualizarPantalla(){
    limpiarCanvas();
    graficarGato();
    crearComida();
}

function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();
    detectarColision();
}

function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
    detectarColision();
}

function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
    detectarColision();
}

function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
    detectarColision();
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function detectarColision(){
    if(comidaX+ANCHO_COMIDA>gatoX && comidaX<gatoX+ANCHO_GATO && comidaY+ALTO_COMIDA>gatoY && comidaY<gatoY+ALTO_GATO){
        aparecerComida();
        puntos=puntos+1;
        mostrarEnSpan("puntos",puntos)
        sumarTiempo(puntos);
    }if(puntos==6){
        alert("GANADOR")
        reiniciar();
    }
}

function aparecerComida(){
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
    actualizarPantalla();
}

function restarTiempo(){
    tiempo=tiempo-1;
    mostrarEnSpan("tiempo",tiempo);
    if(tiempo<0){
        tiempo=0;
        mostrarEnSpan("tiempo",tiempo);
        clearInterval(intervalo);
    }
} 

function reiniciar() {
    clearInterval(intervalo);
    puntos = 0;
    tiempo = 15;
    gatoX = canvas.width / 2 - (ANCHO_GATO / 2);
    gatoY = canvas.height / 2 - (ALTO_GATO / 2);
    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);
    aparecerComida();
    actualizarPantalla();
    intervalo = setInterval(restarTiempo, 1000);
}

function sumarTiempo(punto){
    if(punto>0){
        tiempoMaximo=tiempoMaximo-1;
        tiempo=tiempoMaximo;
         mostrarEnSpan("tiempo",tiempo);
    }
}