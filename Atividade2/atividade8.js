//8. Agrupamento por Propriedade
//Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
//cada chave é um cliente e o valor é a soma de todos os seus total.

function somarVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        // Se o cliente já existe no acumulador, soma ao total existente
        if (acumulador[venda.cliente]) {
            acumulador[venda.cliente] += venda.total;
        } 
        // Se não existe, cria uma nova entrada com o total atual
        else {
            acumulador[venda.cliente] = venda.total;
        }
        return acumulador;
    }, {}); // Objeto vazio como valor inicial
}
const vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 200 },
    { cliente: "João", total: 50 },
    { cliente: "Pedro", total: 300 },
    { cliente: "Maria", total: 150 }
];

const totalPorCliente = somarVendasPorCliente(vendas);
console.log(totalPorCliente);
/*
Saída:
{
    "João": 150,
    "Maria": 350,
    "Pedro": 300
}
*/