let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

const ALTO_GATO=80;
const ANCHO_GATO=50;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;

function graficarGato(){
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO/ 2);
    let colorG= "#1900ff";
    graficarRectangulo(gatoX, gatoY,ANCHO_GATO,ALTO_GATO, colorG);
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