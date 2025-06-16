//5. Debounce
//Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for
//chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        // Cancela o timeout anterior se existir
        clearTimeout(timeoutId);
        
        // Configura um novo timeout
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

//Closure: A função retornada mantém acesso a timeoutId através do closure

//Cancelamento: Cada nova chamada cancela a execução pendente anterior com clearTimeout

//Nova execução: Configura um novo timeout para executar após o delay especificado

//Preservação do contexto: Usa apply para manter o valor de this e passar os argumentos corretamente