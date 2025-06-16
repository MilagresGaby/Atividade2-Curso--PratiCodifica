
//9. Conversão Entre Formatos
//Escreva duas funções:
//○ paresParaObjeto(pares) recebe um array de pares [ [chave,
//valor], ... ] e retorna o objeto equivalente.
//○ objetoParaPares(obj) faz o inverso, retornando um array de pares
function paresParaObjeto(pares) {
    const objeto = {};
    for (const [chave, valor] of pares) {
        objeto[chave] = valor;
    }
    return objeto;
}
function objetoParaPares(obj) {
    return Object.entries(obj);
}
const pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']];
const objeto = paresParaObjeto(pares);
console.log(objeto); // { nome: 'João', idade: 30, cidade: 'São Paulo' }

const paresDeNovo = objetoParaPares(objeto);
console.log(paresDeNovo); // [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']]