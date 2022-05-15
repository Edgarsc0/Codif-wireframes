function redirigirIND(id){
    switch(id){
        case "log":
            window.location="Log.html";
            break;
        case "reg":
            window.location="Reg.html"; 
            break;
    }
}
function redirigirLOG(id){
    switch(id){
        case "alumno":
            window.location="Log-alumno.html";
            break;
        case "profesor":
            window.location="Log-profesor.html"; 
            break;
        case "invitado":
            window.location="Log-invitado.html";
            break;
    }
}
function redirigirREG(id){
    switch(id){
        case "alumno":
            window.location="Reg-alumno.html";
            break;
        case "invitado":
            window.location="Reg-invitado.html";
            break;
    }
}
function redirigirCER(id){
    switch(id){
        case "BC":
            window.location="index.html";
            break;
        case "invitado":
            window.location="Reg-invitado.html";
            break;
    }
}
function validarnl(e){
    var teclado = (document.all)? e.keyCode : e.which;
    var patron = /[A-Z \ a-z \ 0-9 ]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function validarl(e){
    var teclado = (document.all)? e.keyCode : e.which;
    var patron = /[A-Z \ a-z]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}