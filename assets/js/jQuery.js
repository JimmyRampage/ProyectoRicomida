
//-Tooltips enable-//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//-Tooltips enable end-//

//-eventos-//
$(document).ready(function(){
    //-evento clik sobre boton enviar correo-//
    $("#enviarCorreo").click(function(){
            alert("El correo fue enviado correctamente...");
    });
    //-fin-//

    $("")
    //--//
    $("h3").on("dblclick",function() {
        $(this).css({
            "color" : "red"
        });
    });
    //-fin-//

    //--//
    $(".card-title").on("click",function() {
        $(".card-text").toggle();
    });
    //-fin-//
});  
//-fin enventos-//