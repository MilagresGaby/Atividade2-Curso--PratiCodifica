//Seção 2: Funções e Recursão
//4. Fatorial Recursivo
//Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
//um Error, e n === 0 retornando 1.

function fatorial(n) {
    // Trata caso de número negativo
    if (n < 0) {
        throw new Error("Não existe fatorial de números negativos");
    }
    
    // Caso base: fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }
    
    // Caso recursivo: n! = n * (n-1)!
    return n * fatorial(n - 1);
}