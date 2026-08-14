//#region atividades 

// #region Atividade 1 — Maioridade - Crie uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".
console.log("Atividade 01")

const idade = 20;
if(idade>=18) {
    console.log("Maior de idade");
} else {
   console.log("Menor de idade");
}

//#endregion

//#region - Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.
console.log("\nAtividade 02")
console.log("If e else")

const nota = 4.9;

if (nota>=7){
    console.log("Aprovado.")
} if (nota>=5 && nota<7){
    console.log("Recuperação.")
} else if (nota<5){
    console.log("Reprovado.");
}

console.log("\nSwitch Case.")
switch(true){
    case (nota <5):
         console.log("Reprovado.");
         break;
     case (nota >=5 && nota <7):
         console.log("Recuperação.");
         break;
     case (nota >=7):
         console.log("Aprovado.");
         break;
     default:
         console.log("Nota inválida");
}
//#endregion

//#region - Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.
console.log("\nAtividade 03")

const usuario = "BiaRosa";
const senha = 9109;

if (usuario=== "BiaRosa" && senha=== 9109){
    console.log("Usuário Autorizado");
}
else {
    console.log("Acesso negado.")
}
//#endregion

//#region - Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, enviado, processando, entregue,
// concluído).
console.log("\nAtividade 04.")
const statusPedido = 1;
console.log("Menu Status do Pedido.\n \n1 - Pendente, 2- Pago, 3- Processando, 4- Entregue, 5- Concluído.")
console.log("Resultado:")
switch(statusPedido){
    case 1:
         console.log("Pendente.");
         break;
     case 2:
         console.log("Pago.");
         break;
     case 3:
         console.log("Processando.");
         break;
     case 4:
         console.log("Entregue.");
         break;
     case 4:
         console.log("Concluído.");
         break;
     default:
         console.log("Não há pedidos.");
}


//#endregion

//#region - Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.
console.log("\nAtividade 05.")
let contador = 1;

for (let i=1; i<=100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}


//#endregion

//#region - Atividade 6 - Refaça o exercicio 5 agora usando for...of e while.
console.log("\nAtividade 06.")
console.log("\nWhile")
while(contador <= 100){
    if (contador % 2 == 0){
        console.log(contador);
    };
    contador++
}
console.log("\nFor...of")

const numeros =[1,2,3,4,5,6,7,8,9,10];
for(const pares of numeros){
    if(pares % 2 === 0){
        console.log(pares);
    }
}
//#endregion

//#region - Atividade 7 — 
// Crie um array com 10 nomes e exiba cada um dele usando for...of.
console.log("\nAtividade 07.")

const nomes = ["Bianca", "Carolina", "Beatriz", "Maria", "Isabela",
    "Larissa", "Ana", "Vitória", "Eduarda", "Stella"
]
for(const pessoas of nomes){
    console.log(pessoas);
}
//#endregion

//#region - Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 
console.log("\nAtividade 08.")
const nomes2 = ["Bianca", "Carolina", "Beatriz", "Maria", "Isabela",
    "Larissa", "Ana", "Vitória", "Eduarda", "Stella"
]
for(const nome2 of nomes2){
    if(nome2.length > 5){
        console.log(nome2);
    }
}
//#endregion

//#region - Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/
console.log("\nAtividade 09.")
const numbers = [10, 20, 30, 40, 50];
soma = 0;

for(const number of numbers){
    soma += number
    console.log(soma)
}
//#endregion

//#region - Atividade 10 — Desafio do backend 
/* 
    Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana Luíza", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
*/
console.log("\nAtividade 10.")
const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana Luíza", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
for(let i = 0; i<pedidos.length; i++){
    if(pedidos[i].pago === true){
        console.log(pedidos[i]);
    }
}

//#endregion