const canvas = document.getElementById("comportamiento");
var elemento = "<polyline id\"figura";
var nElemento= 1;
var rect=canvas.getBoundingClientRect();
var x=0, y=0,dibujando=false, color='black', grosor=1;
var limpiar = document.getElementById("limpiar");
var bandera=false;
var guardado="";


limpiar.addEventListener("click",function(){
    document.getElementById("dibujos").innerHTML="";
    guardado="";
})

function setColor(c){
    color=c;
}

function setGrosor(){
    grosor = document.getElementById('grosor-range').value;
}

function asignarNumero(){
    elemento +=  nElemento + "\"";
    nElemento ++;
    
}
function asignarEstilo(){
    elemento += " style=\"fill:none;stroke:" + color+ ";stroke-width:" + grosor + "\"";
}



canvas.addEventListener('mousedown',function(e){
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    asignarNumero();
    asignarEstilo();
    elemento +=  " points=\""+ x + "," + y;
    
    dibujando=true;
});

canvas.addEventListener('mousemove',function(e){
    if(dibujando===true){
        //dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        dibujar(x,y);
        console.log(elemento);
        bandera=true;
    }
});

canvas.addEventListener('mouseup',function(e){
    if (dibujando===true){
        dibujar(e.clientX - rect.left,e.clientY - rect.top);
        x=0;
        y=0;
        dibujando=false
        elemento = "<polyline id\"figura";
        guardado = document.getElementById("dibujos").innerHTML;
    }
});

function dibujar(x,y){
    if (bandera===true){
        //var elemento2 = elemento.substring(0, elemento.length - 2);
         elemento = elemento.substring(0, elemento.length - 2);
        console.log('elemto2' + elemento);
    }
    elemento += " "  + x + "," + y+ " \">";

    var svg= document.getElementById("dibujos");
        var svg2=document.getElementById("dibujos").innerHTML;
        console.log('svg ante ' + svg2);
        svg.innerHTML = guardado + elemento;
        var svg2=document.getElementById("dibujos").innerHTML;
}
