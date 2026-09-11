/* se pedir uma operação que demora muito, o node não precisa esperar parado*/

// console.log("1");
// console.log("2");
// console.log("3");
//Sincrono
//--------------------------------------------------------------

// console.log("Início...");
// setTimeout(() => {
//     console.log("Terminou depois");
// }, 2000)

// console.log("Fim.")
//Callback é uma função passada para outra função para ser executada posteriormente

// numeros=[1, 2, 3, 4, 5, 6, 7, 90]

// numeros.forEach((numero) => {
//     console.log(numero);
// });

//isso é o callback
// (numero) => {
//     console.log(numero);
// };

// function processarUsuario(nome, callback){
//     console.log("Processando " + nome);
//     callback()
// }

// processarUsuario("Bianca", () => {
//     console.log("Usuário processado");
// });

//--------------
//3
function buscarUsuario(callback) {
    //simulação de tempo
    setTimeout(() => {
        //construindo objeto
        const usuario = {
            id: 1,
            nome: "Rihanna"
        };
        callback(usuario);
    }, 2000)
}

//1
console.log("Início da chamada");

//2
buscarUsuario((usuario) => {
    console.log(usuario)
});

//3
console.log("Fim do processo");

