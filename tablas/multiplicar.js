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



// =========================================
// AJUSTES VISUALES DEL CAMPO
// =========================================

const cmpNumeroTabla = document.getElementById("txtNumeroTabla");
const encabezadoTexto = document.querySelector(".encabezado-texto");

if (cmpNumeroTabla) {

    function actualizarCampoTabla(){

        const cantidad = cmpNumeroTabla.value.length;


        // 4 y 5 cifras
        cmpNumeroTabla.classList.toggle(
            "numero-largo",
            cantidad >= 4 && cantidad <= 5
        );


        // 6 a 8 cifras
        cmpNumeroTabla.classList.toggle(
            "numero-muy-largo",
            cantidad >= 6 && cantidad <= 8
        );


        // 9 cifras o más
        cmpNumeroTabla.classList.toggle(
            "numero-extremo",
            cantidad >= 9
        );


        // Mostrar ayuda cuando el campo está vacío
        if (encabezadoTexto) {

            encabezadoTexto.classList.toggle(
                "input-vacio",
                cmpNumeroTabla.value === ""
            );

        }
    }


    // Detecta cada tecla que se escribe o borra
    cmpNumeroTabla.addEventListener(
        "input",
        actualizarCampoTabla
    );


    // Ejecutar al cargar la página
    actualizarCampoTabla();
}