const navbar = document.querySelector('navbar');
const btnEnvio = document.querySelector("#btn-envio");

const navItemInicio = document.querySelector('.nav-item > a[href="#inicio"]');
const navItemSobre = document.querySelector('.nav-item > a[href="#sobre"]');
const navItemTeste = document.querySelector('.nav-item > a[href="#teste"]');
const txtarea = document.querySelector("#bunny-prompt");

const audio = document.querySelector('#audio'); 

function navScroll(){
    navbar.classList.toggle('scroll', scrollY > 0);
}

window.addEventListener('scroll', navScroll);

//-----------------------------------------------

function speakerHabbit(txt){
    let speech = new SpeechSynthesisUtterance();

    speech.text = txt;
    speech.rate = 1.5;
    speech.pitch = 1.2;


    window.speechSynthesis.speak(speech);
}

btnEnvio.addEventListener('mouseenter', function(){
    speakerHabbit('Enviar texto');
});

navItemInicio.addEventListener('mouseenter', function(){
    speakerHabbit('Início da página');
});

navItemSobre.addEventListener('mouseenter', function(){
    speakerHabbit('Sobre o projeto');
});

navItemTeste.addEventListener('mouseenter', function(){
    speakerHabbit('Teste a aplicação');
});