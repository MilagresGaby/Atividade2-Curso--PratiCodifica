//3. Palavras Únicas
//Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
//todas as palavras únicas e exibi-las em um array. ( com javascript e codigo simples)

function extrairPalavrasUnicas(frase) {
    // Dividir a string em palavras
    const palavras = frase.split(' ');
    const palavrasUnicas = [];
    
    // Verificar cada palavra
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        
        // Verificar se a palavra já está no array de únicas
        if (palavrasUnicas.indexOf(palavra) === -1) {
            palavrasUnicas.push(palavra);
        }
    }
    
    return palavrasUnicas;
}

// Exemplo de uso
const frase = "olá olá mundo mundo";
const resultado = extrairPalavrasUnicas(frase);
console.log(resultado); // Saída: ["olá", "mundo"]