//Funciones para tablas de Multiplicacion

//Genera Tablas
function generarTablas(){
    let contenido="";
    let cmpContenedorTablas=document.getElementById("contenedorTablas");
    for(let i=1;i<=10;i++){
    /* (+=) cada vuelta que repite el for con los valores
       que toma se guardan en la misma variable 
       si ponemos (=) solo tomara la ultima linea de vuelta*/
    contenido+="<div class='fila'>"+
                "<span>5 × "+i+"</span>"+
                "<strong>"+(5*i)+"</strong>"+
                "</div>";
    }
    cmpContenedorTablas.innerHTML=contenido;
}