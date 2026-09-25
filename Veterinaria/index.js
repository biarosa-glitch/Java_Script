const { buscarAtend } = require("./atendimentos");
const { buscarServi } = require("./servicos");

async function fecharConta(atendimentoId) {
    try {
        console.log("Buscando atendimento...");
        const atendimento = await buscarAtend(atendimentoId);
        console.log(atendimento);

        console.log("Percorrendo itens do atendimento...")

        let totalGeral = 0;

        for (const item of atendimento.itens) {
            const servico = await buscarServi(item.servicoId);

            const subTotal = servico.precos * item.quantidade
            totalGeral += subTotal;

            console.log(` ${servico.tipoProcedimento} = ${item.quantidade} x ${servico.precos} = R$ ${subTotal}`);


        }
        console.log("---------------------");
        console.log("Valor a Pagar: ", totalGeral);
    }
    catch (erro) {
        console.error("Erro ao fechar a conta", erro);
    }
};

fecharConta(1);