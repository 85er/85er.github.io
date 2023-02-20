window.onload=()=>{

let formulario = document.querySelector('.login-form');

document.querySelector('#boton-login').onclick = () =>{
    formulario.classList.add('mostrar');
}

document.querySelector('#cerrar-login-form').onclick = () =>{
    formulario.classList.remove('mostrar');
}

let menu = document.querySelector('#boton-menu');
let barranav = document.querySelector('.header .nav');

menu.onclick = () =>{
    barranav.classList.toggle('mostrar');
}

window.onscroll = () =>{
    formulario.classList.remove('mostrar');
    barranav.classList.remove('mostrar');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('mostrar');
    }else{
        document.querySelector('.header').classList.remove('mostrar');
    }

}
}