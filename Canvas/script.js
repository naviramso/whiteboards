var grosor = 1;
var x,y;
var bandera= false;
var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
var canvasize = canvas.getBoundingClientRect();
var color = 'black';
$btnDescargar = document.querySelector("#btnDescargar");

function mousedown(event){
    bandera =true ;
    x=event.clientX- canvasize.left;
    y=event.clientY - canvasize.top;
}
function mouseup(event){
    bandera = false;
}
function mousemove(event){
    if(bandera){
        var x1 = event.clientX -canvasize.left;
        var y1 = event.clientY - canvasize.top;
        dibujar(x1,y1);
        x=x1;
        y=y1;
    }
}
function dibujar(x1,y1){
    ctx.beginPath();
   ctx.lineWidth = 4*grosor;
  // ctx.fillStyle = color; 
   ctx.strokeStyle = color;
    //ctx.arc(x1,y1,grosor,0,2*Math.PI,false);
   // ctx.fill();
    ctx.stroke();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x1+1,y1+1);
    ctx.stroke();
    ctx.closePath();
}

function setColor(cl){
    console.log(cl);
    color = cl;
} 

function setGrosor(){
    grosor = document.getElementById('grosor-range').value;
}

function limpiar(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 1000, 720);
}

$btnDescargar.addEventListener("click", () => {
    let enlace = document.createElement('a');
    enlace.download = "Canvas como imagen.jpg";
    enlace.href = canvas.toDataURL("image/jpeg", 1);
    enlace.click();
})

canvas.addEventListener('mousedown',mousedown);
canvas.addEventListener("mouseup",mouseup);
canvas.addEventListener("mousemove",mousemove);
