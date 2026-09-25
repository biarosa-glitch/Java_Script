const procedimentos = [
    {
        id: 1,
        tipoProcedimento: "Consulta",
        precos: 200
    },
    {
        id: 2,
        tipoProcedimento: "Vacina",
        precos: 70
    },
    {
        id: 3,
        tipoProcedimento: "Exames",
        precos: 60
    }
];

async function buscarServi(Id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const servico = procedimentos.find(servico => servico.id === Id);
            if (servico){
                resolve(servico);
            }
            else {
                reject("Serviço não encontrado");
            }
        },1000)

    })   
}

module.exports = {
    buscarServi
};