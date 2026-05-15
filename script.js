const palavras = [
    "cpu",
    "ram",
    "ssd",
    "wifi",
    "mouse",
    "linux",
    "java",
    "cloud"
];

const perguntas = [

    "🧠 Qual componente é considerado o cérebro do computador?",

    "⚡ Qual memória temporária ajuda o computador a executar programas rapidamente?",

    "💾 Qual dispositivo moderno é mais rápido que HD?",

    "📶 Tecnologia usada para internet sem fio.",

    "🖱️ Dispositivo usado para mover o cursor.",

    "🐧 Sistema operacional famoso por ser open source.",

    "☕ Linguagem famosa pelo slogan: Write Once Run Anywhere.",

    "☁️ Tecnologia usada para armazenar serviços online."

];

const classes = [
    ".palavra1",
    ".palavra2",
    ".palavra3",
    ".palavra4",
    ".palavra5",
    ".palavra6",
    ".palavra7",
    ".palavra8"
];

const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const mensagem = document.getElementById("mensagem");

const btnEnviar = document.getElementById("btnEnviar");

const barra = document.getElementById("barra");

const pontosEl = document.getElementById("pontos");
const vidasEl = document.getElementById("vidas");

let contador = 0;
let pontos = 0;
let vidas = 3;

pergunta.innerHTML = perguntas[contador];

btnEnviar.addEventListener("click", verificar);

resposta.addEventListener("keypress", (e)=>{

    if(e.key === "Enter"){
        verificar();
    }

});

function verificar(){

    const texto = resposta.value
    .trim()
    .toLowerCase();

    if(texto === palavras[contador]){

        mensagem.innerHTML = "✅ Resposta Correta!";
        mensagem.style.color = "#00ff88";

        pontos += 10;

        pontosEl.innerHTML = pontos;

        document
        .querySelectorAll(classes[contador])
        .forEach(item=>{

            item.style.color = "white";

            item.style.background =
            "linear-gradient(135deg,#8b5cf6,#ec4899)";

            item.style.transform = "scale(1.08)";

            item.style.boxShadow =
            "0 0 15px #a855f7";

            item.style.animation =
            "pulse 0.5s ease";

        });

        contador++;

        const progresso =
        (contador / palavras.length) * 100;

        barra.style.width = `${progresso}%`;

        resposta.value = "";

        if(contador < palavras.length){

            pergunta.innerHTML =
            perguntas[contador];

        }

        else{

            pergunta.innerHTML =
            "🏆 Você concluiu toda a cruzadinha!";

            mensagem.innerHTML =
            "🎉 Parabéns Campeão!";

            btnEnviar.disabled = true;

            resposta.disabled = true;
        }

    }

    else{

        vidas--;

        vidasEl.innerHTML = vidas;

        mensagem.innerHTML =
        "❌ Resposta Errada!";

        mensagem.style.color =
        "#ff4d4d";

        resposta.style.animation =
        "shake 0.3s";

        setTimeout(()=>{

            resposta.style.animation = "";

        },300);

        if(vidas <= 0){

            pergunta.innerHTML =
            "💀 Game Over";

            mensagem.innerHTML =
            "Você perdeu todas as vidas.";

            btnEnviar.disabled = true;

            resposta.disabled = true;
        }
    }
}