//construiu objeto com usuários
const usuarios = [
    {
        id: 1,
        nome: "Khai",
        whats: "16999999999",
        email: "khai.malik@gmail.com",
        cep: "13675-112"
    },
    {
        id: 2,
        nome: "Patricia",
        whats: "16999999997",
        email: "pattie.malette@gmail.com",
        cep: "13670-112"
    },
    {
        id: 3,
        nome: "Zayn",
        whats: "16999999995",
        email: "zayn.malik@gmail.com",
        cep: "13675-112"
    }
];

//Função buscarUsuario
async function buscarUsuario(Id) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const usuario = usuarios.find(usuario => usuario.id === Id);
            if (usuario){
                resolve(usuario);
            }
            else {
                reject("Usuário não encontrado");
            }
        },1000)

    })
}

//Transformando em módulo
module.exports = {
    buscarUsuario
};