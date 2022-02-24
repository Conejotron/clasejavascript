/*
    Funcion a ejecutar al cargar la página
*/
window.onload = function() {
    /* Asignar evento al botón generar sentencia */
    document.getElementById('generar').addEventListener("click",function(e){
        e.preventDefault();
        var areagenerado = document.getElementById("generado");
        areagenerado.innerHTML = "for (let x = "+document.getElementById("Inicio").value +
        " ; x <= "+document.getElementById("Final").value + " ; x++) {\n" +
        " console.log( '-' + x  );\n" +
        "}";
    });
    /* Asignar evento al botón generar previsualización */
    document.getElementById("ejecutar").addEventListener("click",function(e){
        e.preventDefault();
        var arearesultado = document.getElementById("resultado");
        var mensaje = "";
        var inicio = document.getElementById("Inicio").value;
        var final = document.getElementById("Final").value;
        for(let x=inicio; x<=final; x++) {
            mensaje=mensaje+"-"+x;
        }
        arearesultado.innerHTML = mensaje;
    });
}