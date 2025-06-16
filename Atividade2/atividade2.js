//2. Jogo de Adivinhação
//Escreva um script que gere um número aleatório de 1 a 100 e peça aousuário, para adivinhar. Use while para repetir até acertar, contando
//tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    
    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log("Tente adivinhar um número entre 1 e 100.");

    while (true) {
        const palpite = parseInt(prompt("Digite seu palpite: "));
        tentativas++;
        
        if (isNaN(palpite)) {
            console.log("Por favor, digite um número válido.");
            continue;
        }
        
        if (palpite === numeroAleatorio) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            break;
        }
        
        console.log(palpite < numeroAleatorio ? "Mais alto!" : "Mais baixo!");
    }
}

jogoAdivinhacao();