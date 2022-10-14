const canvas = document.getElementById("comportamiento");
var elemento = "<circle ";
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


canvas.addEventListener('mousedown',function(e){   
    dibujando=true;
});

canvas.addEventListener('mousemove',function(e){
    if(dibujando){
        //dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        dibujar(x,y);
        bandera=true;
    }
});

canvas.addEventListener('mouseup',function(e){

        dibujando=false
        elemento = "<circle ";
        guardado = document.getElementById("dibujos").innerHTML;
        console.log(guardado);
    
});

function dibujar(x,y){
    if (bandera===true){
        //var elemento2 = elemento.substring(0, elemento.length - 2);
        //elemento = elemento.substring(0, elemento.length - 2);
        //console.log('elemto2' + elemento);
    }
    elemento += "cx='"  + x + "' cy='" + y+ "' r='"+ grosor +"' fill='"+color+"' />";

    var svg= document.getElementById("dibujos");
        var svg2=document.getElementById("dibujos").innerHTML;
        console.log( elemento );
        svg.innerHTML = guardado + elemento;
        elemento="<circle "
        var svg2=document.getElementById("dibujos").innerHTML;
        guardado = document.getElementById("dibujos").innerHTML;
        
}
