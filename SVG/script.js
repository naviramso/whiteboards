const canvas = document.getElementById("comportamiento");
var elemento = "";
var inicio ='<polyline points="';
var fin='';
var rect=canvas.getBoundingClientRect();
var x=0, y=0,dibujando=false, color='black', grosor=1;
var limpiar = document.getElementById("limpiar");
var bandera=false;
var guardado='';


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
    fin = '" style="fill:none;stroke:'+color+';stroke-width:'+grosor+'" />';
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
        guardado = guardado +elemento ;
        inicio= '<polyline points="';
        console.log(guardado);
    
});

function dibujar(x,y){
   
    inicio = inicio+x+","+y+" ";
    elemento  =inicio+fin;
    var svg= document.getElementById("dibujos");   
    svg.innerHTML = guardado + elemento;
        
        
}
