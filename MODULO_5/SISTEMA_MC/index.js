const fs = require("fs/promises"); // auxiliará a criar o arquivo
//exports e imports 
const {buscarUsuario} = require("./usuarios");
const {buscarProduto} = require("./produtos");
const {buscarPedidos} = require("./pedidos");

//função (async = função dentro de função, necessita do await)
async function fecharConta(usuarioId) {
    try{
        //usuário
        console.log("Buscando usuário...")
        const usuario = await buscarUsuario(usuarioId);
        console.log(usuario)


        // //produto
        // console.log("Buscando produto...")
        // const produto = await buscarProduto(usuarioId);
        // console.log(produto);

        //pedidos = total geral, array para os itens, varrer os pedidos p/ verificar se existem +
        // varrer os itens(produtos) e add(push) nos itens conta, estrutura da comanda, 
        // construir nosso arquivo
        console.log("Buscando pedidos...")
        const pedidos= await buscarPedidos(usuario.id)
        
        let totalGeral = 0;

        const itensConta = [];

        for(const pedido of pedidos){
            const produto = await buscarProduto(pedido.produtoId);
            const subTotal = produto.preco * pedido.quantidade

            itensConta.push(
                {
                item: produto.nome,
                quantidade: pedido.quantidade,
                precoUnitario: produto.preco,
                subtotal: subTotal
                });

                totalGeral += subTotal //adiciona um a outro
        }

        //construir arquivo
        const comanda = {
            estabelecimento: "Mc",
            cliente:{
                id: usuario.id,
                nome: usuario.nome,
            },
            itens: itensConta,
            totalPagar: totalGeral
        }

        await fs.writeFile("comandaCliente.json", JSON.stringify(comanda, null, 2), "utf-8");

    }
    catch(erro){
        console.error("Erro ao fechar a conta", erro);
    }
}

fecharConta(1);
