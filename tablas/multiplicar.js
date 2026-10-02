//Funciones para tablas de Multiplicacion

//Genera Tablas
function generarTablas(num){
    let contenido="";
    let cmpContenedorTablas=document.getElementById("contenedorTablas");
    for(let i=1;i<=10;i++){
    /* (+=) cada vuelta que repite el for con los valores
       que toma se guardan en la misma variable 
       si ponemos (=) solo tomara la ultima linea de vuelta*/
    contenido+="<div class='fila'>"+
                "<span>"+num+" × "+i+"</span>"+
                "<strong>"+(num*i)+"</strong>"+
                "</div>";
    }
    cmpContenedorTablas.innerHTML=contenido;
}

function generarNumeroTabla(){
    let cmpNumTabla=document.getElementById("txtNumeroTabla");
    let NumTabla=cmpNumTabla.value;
    generarTablas(NumTabla);
}