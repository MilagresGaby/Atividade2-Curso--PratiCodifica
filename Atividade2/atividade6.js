//6. Memoization
//Implemente function memoize(fn) que armazene em cache chamadas
//anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        // Cria uma chave única para os argumentos
        const key = JSON.stringify(args);
        
        // Se já existir no cache, retorna o valor armazenado
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        // Se não existir, calcula, armazena no cache e retorna
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}