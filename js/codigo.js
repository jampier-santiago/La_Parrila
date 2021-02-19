// --- MENÚ PRINCIPAL ---

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

// --- MENÚ PRINCIPAL ---

// --- FLECHA QUE LLEVA AL INICIO DE LA PAGINA ---
const $flecha = document.getElementById('flecha');
$flecha.addEventListener("click", subir);

window.addEventListener("resize", flechaVisible);

function flechaVisible(){
    window.onscroll = function(){
        if(document.documentElement.scrollTop > 300){
            $flecha.style.display = 'block';
        }else{
            $flecha.style.display = 'none';
        }
    }
}

function subir(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// --- FLECHA QUE LLEVA AL INICIO DE LA PAGINA ---

// --- VENTANA EMERGENTE PARA EL CONTACTO DE WHATSAPP ---
    const $iconoW = document.getElementById('iconoW');

    $iconoW.addEventListener("click", ventanaEmergente);

    function ventanaEmergente(){
        swal({
            title: "¡Contactanos!",
            text: "+57 30.......", 
            icon: "success",
            button: "Continuar"
        });
    }
// --- VENTANA EMERGENTE PARA EL CONTACTO DE WHATSAPP ---