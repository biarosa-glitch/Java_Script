//#region - if mostrando no console
// const idade= 20;

// if(idade>=18) {
//      console.log("Maior de idade");
//
//#endregion

//#region - if & else mostrando no console
// const idade2= 16;

// if(idade2>=18) {
//      console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }
//#endregion

//#region - If e else if (nota com casa decimal muito grande)
// const nota = 6.9999999999999999999999999999999999999999999999999999999;
// const notaArredondada = Number(nota.toFixed);
// console.log(notaArredondada);

// if(notaArredondada>=7) {
//     console.log("Aprovado")
// } if (notaArredondada>=5 && notaArredondada<7) {
//     console.log("Recuperação")
// } else if (notaArredondada<5) {
//     console.log("Reprovado")
// }
//#endregion

//#region - if e else again 
// const senha = 20;
// const email = "ddd@gmail.com";
// const ativo = true;

// if (senha === 18 && ativo) {
//     console.log("Usuário Autorizado");
// }
// else {
//     console.log("Acesso negado.")
// }
//#endregion

//#region - switchcase
// const dia = 3
// switch(dia){
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-feira");
//         break;
//     case 3:
//         console.log("Terça-feira");
//         break;
//     case 4:
//         console.log("Quarta-feira");
//         break;
//     case 5:
//         console.log("Quinta-feira");
//         break;
//     case 6:
//         console.log("Sexta-feira");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Dia não encontrado.");
// }
//#endregion

// Quando usar o switchcase?
    // Quando temos muitas condições para verificar.
    // Quando temos uma variável que pode ter muitos valores diferentes.
    // Quando queremos deixar o código mais legível.

//Quando usar if/else?
    // Quando temos poucas condições para verificar.

//#region - Abstração de if/else
// let mensagem;

// if(idade >= 18) {
//     mensagem = "Maior";
// } 
// else {
//     mensagem = "Menor";
// }
//pode refazer com operador ternário
// const idade = 20;
// const mensagem = idade >= 18 ? "Maior" : "Menor"
// console.log(mensagem)
//#endregion

// Quando usar o operador ternário?
    //Quando temos uma condição simples.
    //Quando queremos deixar o código mais legível.

//#region - laços (while, for)s

// let contador = 1;
//while
// while(contador <=6){
//     console.log(contador);

//     contador++;
//}

//for (iniciação; condição; incremento)
// for (let i=1; i<=5; i++){
//     console.log(i);
// }

//variação do for (for...of)
// const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];

//otimizado para array

// for(const fruta of frutas){
//     console.log(frutas);
// }

//for tradicional

// for (let i=0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

//#endregion
