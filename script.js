// Mensagem do botão
function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
        "🚀 Em 2050, o Brasil será líder mundial em agricultura sustentável, utilizando inteligência artificial, robôs, drones e energia limpa para produzir mais alimentos preservando a natureza.";

    mensagem.style.opacity = "0";

    setTimeout(() => {
        mensagem.style.opacity = "1";
        mensagem.style.transform = "scale(1.05)";
    }, 100);

    setTimeout(() => {
        mensagem.style.transform = "scale(1)";
    }, 500);
}

// Animação ao carregar a página
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "all 1.5s";
        document.body.style.opacity = "1";
    }, 100);
});

// Animação dos cards ao rolar
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const posicao = card.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Configuração inicial dos cards
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";
});

// Contador de anos até 2050
const contador = document.createElement("div");
contador.id = "contador2050";
contador.style.textAlign = "center";
contador.style.fontSize = "2rem";
contador.style.margin = "30px";
contador.style.fontWeight = "bold";
contador.style.color = "#2e7d32";

document.body.insertBefore(contador, document.querySelector("footer"));

function atualizarContador() {
    const anoAtual = new Date().getFullYear();
    contador.innerHTML =
        "🌎 Faltam " + (2050 - anoAtual) + " anos para 2050";
}

atualizarContador();

// Troca automática de cores do título
const titulo = document.querySelector("header h1");

const cores = [
    "#00ff88",
    "#00c853",
    "#ffd600",
    "#00e5ff",
    "#ff9100",
    "#76ff03"
];

let indice = 0;

setInterval(() => {
    titulo.style.transition = "0.8s";
    titulo.style.color = cores[indice];

    indice++;
    if (indice >= cores.length) {
        indice = 0;
    }
}, 1500);

// Efeito de partículas simples
for (let i = 0; i < 25; i++) {
    const folha = document.createElement("div");

    folha.innerHTML = "🌿";
    folha.style.position = "fixed";
    folha.style.left = Math.random() * 100 + "vw";
    folha.style.top = "-50px";
    folha.style.fontSize = (Math.random() * 20 + 15) + "px";
    folha.style.pointerEvents = "none";
    folha.style.zIndex = "999";

    document.body.appendChild(folha);

    let posY = -50;

    setInterval(() => {
        posY += 2;
        folha.style.top = posY + "px";

        if (posY > window.innerHeight + 50) {
            posY = -50;
            folha.style.left = Math.random() * 100 + "vw";
        }
    }, 30);
}

// Ano automático no rodapé
const footer = document.querySelector("footer p");

footer.innerHTML += " | " + new Date().getFullYear();

// Saudação dinâmica
const saudacao = document.createElement("h2");

const hora = new Date().getHours();

if (hora < 12) {
    saudacao.innerHTML = "☀️ Bom dia!";
} else if (hora < 18) {
    saudacao.innerHTML = "🌤️ Boa tarde!";
} else {
    saudacao.innerHTML = "🌙 Boa noite!";
}

saudacao.style.textAlign = "center";
saudacao.style.marginTop = "20px";
saudacao.style.color = "#1b5e20";

document.querySelector("header").appendChild(saudacao);

