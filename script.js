document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos da página
    const checkboxes = document.querySelectorAll(".pratica-check");
    const barra = document.getElementById("barra");
    const scoreTexto = document.getElementById("score-texto");
    const mensagem = document.getElementById("mensagem");

    function calcularEquilibrio() {
        let scoreTotal = 0;

        // Soma os pontos de cada caixinha marcada
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                scoreTotal += parseInt(checkbox.getAttribute("data-pontos"));
            }
        });

        // Atualiza a largura da barra e o texto da porcentagem
        barra.style.width = scoreTotal + "%";
        scoreTexto.textContent = scoreTotal + "%";

        // Altera as cores e mensagens dinamicamente com base no score
        if (scoreTotal === 0) {
            mensagem.textContent = "Alerta crítico! A fazenda não está pensando no futuro.";
            barra.style.backgroundColor = "#e53935"; // Vermelho
            mensagem.style.color = "#e53935";
        } else if (scoreTotal <= 50) {
            mensagem.textContent = "Produção em andamento, mas o impacto ambiental ainda está alto.";
            barra.style.backgroundColor = "#ffb300"; // Amarelo/Laranja
            mensagem.style.color = "#b78100";
        } else if (scoreTotal <= 75) {
            mensagem.textContent = "Muito bem! O caminho para a sustentabilidade está avançado.";
            barra.style.backgroundColor = "#7cb342"; // Verde claro
            mensagem.style.color = "#4b6b24";
        } else {
            mensagem.textContent = "Equilíbrio Perfeito Atingido! Agro forte, tecnologia de ponta e planeta protegido! 🌱✨";
            barra.style.backgroundColor = "#2e7d32"; // Verde escuro
            mensagem.style.color = "#1b5e20";
        }
    }

    // Adiciona o evento para recalcular sempre que o usuário marcar/desmarcar algo
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", calcularEquilibrio);
    });
});