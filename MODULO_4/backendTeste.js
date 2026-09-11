//Simulação 
//função usuário
const esperar = (ms) => new Promise (
    resolve => setTimeout(
        resolve, ms
    )
);

//BuscarUsuário
async function buscarUsuario(Id) {
    await  esperar(2000);

    return {
        id: Id, //ID que a gente manda na executar. 
        nome: "Robyn Rihanna",
        email: "riri@email.com"
    }
};

//função buscarPedidos
async function buscarPedidos(usuarioId) {
    await  esperar(3000);

    const todosPedidos = [
        {id: 1, produto: "X-Tudo"},
        {id: 2, produto: "Coca-Cola"},
        {id: 3, produto: "X-Catupiry"}

    ];
    return todosPedidos.filter(pedido => pedido.id === usuarioId);
}

//Função executar
async function executar() {
    try {
        console.log("Iniciando simulação")
        console.log("Buscando usuário...")
        const usuario = await buscarUsuario(1);
        console.log("Usuário encontrado ", usuario);
        //bi
        console.log("Buscando pedidos pelo ID...", usuario.id)
        const pedidos = await buscarPedidos(usuario.id)
        console.log("O pedido encontrado foi", pedidos);
    }
    catch(erro){
        console.log("Deu errado")
    }
}

executar();
    
