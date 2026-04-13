let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle="blue"
    ctx.fillRect(canvas.width/2 -25,canvas.height/2 -25,50,50)
}