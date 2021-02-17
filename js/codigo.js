//variables
let botonMenuActivado = true;

//boton del menú
const $botonMenu = document.getElementById('btn-menu');

//menú responsive
const $segundoMenu = document.getElementById('menu-responsive');

//escuchador de eventos para saber cuando dan click al boton del menú
$botonMenu.addEventListener('click', () => {
    if(botonMenuActivado){
        $segundoMenu.style.transform = 'translateX(0)';
        botonMenuActivado = false;
    }else{
        $segundoMenu.style.transform = 'translateX(-100%)';
        botonMenuActivado = true;
    }
});