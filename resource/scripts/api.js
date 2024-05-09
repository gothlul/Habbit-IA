import { GoogleGenerativeAI } from "@google/generative-ai";

//===========Informações para o uso do Gemini-IA===========//  
const API_KEY = "AIzaSyCwUy8eT5BMSCvi75l5lrqk_B4x6B_bSvw";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});
var text;

//===============Gerador de texto Gemini-IA===============//

async function run() {
    let prompt = document.getElementById("content").value;
    let resposta = document.getElementById("prompt");
    const txtarea = document.querySelector("#bunny-prompt");
    const bunny = document.querySelector("#image-bunny");
  
    prompt = promptVerify(prompt);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    text = response.text().replace(/\*/g, '<br/>');

    txtarea.style.display = "flex";
    bunny.style.display = "block";
    audio.style.display = "block";
    resposta.innerHTML = text;

    if(!document.querySelector('#audio').classList.contains('stop')){
        speakerHabbit(text);
    }
}

function promptVerify(prompt){
    if(prompt == '' || prompt.trim() == ''){
        prompt = 'escreva "Escreva algo antes de enviar!!"';
    }

    prompt += "(pt-br). Interprete como uma IA integrada por uma pessoa chamada 'Habbit'";

    return prompt;
}

function speakerHabbit(txt){
    let speech = new SpeechSynthesisUtterance();

    speech.text = txt;
    speech.rate = 1.5;
    speech.pitch = 1.2;


    window.speechSynthesis.speak(speech);
}

//--------------------------------------------------

const btn = document.querySelector("#btn-envio");
let audio = document.querySelector('#audio');
const synth = window.speechSynthesis;

btn.addEventListener('click', function(){run();});

audio.addEventListener('click', function(){
    audio.classList.toggle('stop');

    if(audio.classList.contains('stop')){
        audio.setAttribute('src', 'resource/img/icons/audiooff.svg');
        synth.cancel();
    }else{
        audio.setAttribute('src', 'resource/img/icons/audioon.svg');
        if(!(text === undefined)){
            speakerHabbit(text);
        }
    }
})



