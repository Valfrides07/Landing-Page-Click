const frasesTela = document.getElementById('Frases_Tela');

// Frases dos clicks 

const PrimeiraMensagem  = [
    'Para avançar basta clicar na tela.',
    'Bhrenda, você é a minha escolha no dia de hoje, de amanha e em todos os proximos, eu te amo.', 
    'As proximas palavras são simples... mas que eu "falo" do fundo do meu coração, no intuito de te deixar mais feliz'
];

let clickCount = 0;


const frases = [
    "Você virou a minha prioridade sem eu nem perceber.",
    "Eu não consigo te explicar o que sinto, só sei que é você… sempre você.",
    "Eu quero construir minha vida do seu lado.",
    "Você me traz uma paz (e caos rs) que eu jamais achei que encontraria em alguém.",
    "Eu te quero por tudo que ainda vamos viver.",
    "Eu sinto que com você eu posso ser eu mesmo, sem medo.",
    "Eu quero que você saiba: eu escolho você, hoje e todos os dias.",
    "O meu coração sorri quando você chega, mesmo que as vezes nao pareça.",
    "Eu não quero te perder. Quero te cuidar.",
    "Com você, até o silêncio vira abraço.",
    "Eu nunca senti algo tão sincero como o que sinto por você.",
    "Eu me apaixonado por você todos os dias.",
    "Você é o meu orgulho diário",
    "Eu acredito em você, sempre!",
    "Você é capaz de tuuuuudo, só tem que acreditar mais em você mesma!",
    "Nehuma outra tem o seu lugar na minha vida",
    "Você é a unica mulher que desejo na minha vida",
    "Te amo.",
    "Como dizia o seus 'Ídolos' Henrique e Juliano: <br>O céu explica tudo Pros nossos corações<br> As estrelas são as várias paixões que eu tive<br> O céu explica tudo<br> E o amor é<br> feito a lua<br> Adivinha o que que cê é no meu céu<br> Chuta: A lua "
];

document.addEventListener("click", () => {
  const fraseEl = document.getElementById("Frases_Tela");

  // 1) Se ainda temos frases obrigatórias...
  if (clickCount < PrimeiraMensagem.length) {
    fraseEl.textContent = PrimeiraMensagem[clickCount];
    clickCount++;
    return;
}

  if (clickCount === PrimeiraMensagem.length) {
    frasesTela.innerHTML = ""; 

    const img = document.createElement("img");
    img.src = "./dog-love.jpg"; // caminho RELATIVO
    img.style.width = "600px";
    img.style.borderRadius = "12px";

    frasesTela.appendChild(img);

    clickCount++;  
    return;
  }

document.addEventListener('click', function(e){

    const random = Math.floor(Math.random() * frases.length);

        console.log(random,frases[random]);
        frasesTela.innerHTML = frases[random];

});

});
