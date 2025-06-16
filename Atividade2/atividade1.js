//1. Validação de Datas
//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para
//fevereiro) e false caso contrário.
function ehDataValida(dia, mes, ano) {
    // Verifica se os valores são números inteiros positivos
    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        return false;
    }
    
    // Verifica limites básicos
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }
    
    // Determina o número máximo de dias para cada mês
    const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Ajusta fevereiro para anos bissextos
    if (mes === 2) {
        // Verifica se é ano bissexto
        const ehBissexto = (ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0);
        if (ehBissexto) {
            if (dia > 29) return false;
        } else {
            if (dia > 28) return false;
        }
    } else {
        // Verifica outros meses
        if (dia > diasNoMes[mes - 1]) {
            return false;
        }
    }
    
    return true;
}

// Testes
console.log(ehDataValida(29, 2, 2020)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2021)); // false
console.log(ehDataValida(31, 4, 2023)); // false (abril só tem 30 dias)
console.log(ehDataValida(15, 6, 2023)); // true
console.log(ehDataValida(0, 1, 2023));  // false (dia inválido)
console.log(ehDataValida(32, 1, 2023)); // false (dia inválido para janeiro)