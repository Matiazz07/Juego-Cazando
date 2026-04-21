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
let puntos=0;
let tiempo=15;
let intervalo;

function graficarGato(){
    let colorG= "#5005ff";
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,colorG);
}

function crearComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA, "#FF0808");
}

function iniciarJuego(){
    intervalo=setInterval(restarTiempo,1000);
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
        tiempo=15;
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
         tiempo=tiempo+5;
         mostrarEnSpan("tiempo",tiempo);
    }
}