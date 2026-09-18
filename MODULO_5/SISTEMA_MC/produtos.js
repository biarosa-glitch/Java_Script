//Construir meu array de produtos
const produtos = [
    {
        id: 1,
        produto: "Batata Frita",
        preco: 12
    },
    {
        id: 2,
        produto: "Refrigerante",
        preco: 22
    },
    {
        id: 3,
        produto: "Big Mc",
        preco: 23
    },
    {
        id: 4,
        produto: "Top Sunday",
        preco: 12
    },
    {
        id: 5,
        produto: "Quarteirão",
        preco: 24
    },
];

//Função buscarProdutos
async function buscarProduto(Id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const produto = produtos.find(produto => produto.id === Id);
            if (produto){
                resolve(produto);
            }
            else {
                reject("Produto não encontrado");
            }
        },1000)

    })
    
}

//module para exportar
module.exports = {
    buscarProduto
};