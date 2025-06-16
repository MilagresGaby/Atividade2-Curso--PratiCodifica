//Seção 3: Arrays e Objetos Complexos
//7. Mapeamento e Ordenação
//Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço
//crescente, usando map, sort.
function ordenarNomesPorPreco(produtos) {
    // 1. Ordenar os produtos por preço (crescente)
    const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
    
    // 2. Mapear para obter apenas os nomes
    return produtosOrdenados.map(produto => produto.nome);
}
const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Smartphone", preco: 2500 },
    { nome: "Tablet", preco: 1800 },
    { nome: "Fones de ouvido", preco: 300 }
];

const nomesOrdenados = ordenarNomesPorPreco(produtos);
console.log(nomesOrdenados); 
// Saída: ["Fones de ouvido", "Tablet", "Smartphone", "Notebook"]