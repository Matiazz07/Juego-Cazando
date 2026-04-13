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

function graficarGato(){
    let colorG= "#5005ff";
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,colorG);
}

function crearComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA, "#FF0808");
}

function iniciarJuego(){
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
}

function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}