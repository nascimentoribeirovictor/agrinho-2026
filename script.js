
// Mensagem interativa
function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
        "🌱 Em 2050, o agro brasileiro será mais tecnológico, produtivo e sustentável, utilizando inteligência artificial, energias renováveis e preservação ambiental.";

    mensagem.style.display = "block";
}

// Exibe o ano atual no rodapé
const anoAtual = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML += " | Desenvolvido em " + anoAtual;
}

// Efeito ao carregar a página
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
});

// Saudação de acordo com o horário
const hora = new Date().getHours();

if (hora < 12) {
    console.log("Bom dia! Bem-vindo ao Agro 2050.");
} else if (hora < 18) {
    console.log("Boa tarde! Bem-vindo ao Agro 2050.");
} else {
    console.log("Boa noite! Bem-vindo ao Agro 2050.");
}
