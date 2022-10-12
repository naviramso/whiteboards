var x,y;
var bandera= false;
var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
var canvasize = canvas.getBoundingClientRect();

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
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.stroke();
    ctx.closePath();
}
canvas.addEventListener('mousedown',mousedown);
canvas.addEventListener("mouseup",mouseup);
canvas.addEventListener("mousemove",mousemove);
