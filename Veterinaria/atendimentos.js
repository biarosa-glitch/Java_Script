const atendimentos = [
    {
        id: 1,
        nomeTutor: "Stella",
        nomePet: "Bob",
        itens: [
            {servicoId: 1, quantidade: 1},
            {servicoId: 2, quantidade: 3}
        ]
    },
    {
        id: 2,
        nomeTutor: "Mauricio",
        nomePet: "Fred",
        itens: [
            {servicoId: 1, quantidade: 1},
            {servicoId: 3, quantidade: 1}
        ]
    },
    {
        id: 3,
        nomeTutor: "Ana",
        nomePet: "Mary",
         itens: [
            {servicoId: 1, quantidade: 1},
            {servicoId: 2, quantidade: 2}
        ]
    }
];

//Função buscarAtend
async function buscarAtend(Id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const atendimento = atendimentos.find(atendimento => atendimento.id === Id);
            if (atendimento){
                resolve(atendimento);
            }
            else {
                reject("Atendimento não encontrado");
            }
        },1000)

    })
}

module.exports = {
    buscarAtend
};