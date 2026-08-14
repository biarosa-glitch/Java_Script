//#region - Operadores 
//const remy = 20;

//console.log(remy <= 18)
//#endregion 

//#region -Operadores matemáticos

// const a = 10;
// const b = "10";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b); // Resto da divisão
//#endregion

//#region - Comparações
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b); // comparação de valor
// console.log(a === b);// comparação de valor e tipo
// console.log(a !== b); // diferentes
//#endregion

//#region - Comparações a partir da variável informada

// const idade1 = 20;
// const idade2 = 25;

// //console.log(idade1, idade2)
// console.log(idade1 > idade2);
// console.log(idade1 < idade2);
// console.log(idade1 >= idade2);
// console.log(idade1 <= idade2);
// console.log(idade1 == idade2); // comparação de valor
// console.log(idade1 === idade2);// comparação de valor e tipo
// console.log(idade1 !== idade2); // diferentes
//#endregion

//#region - Operadores lógicoss
// const idade3 = 17;
// const idade4 = 15;

// //&& = E, and
// console.log(idade3 > 18 && idade4 > 18); // Todas precisam ser verdadeiras ou falsas
// //|| = ou, or
// console.log(idade3 > 18 || idade4 > 18); // Só uma precisa ser verdadeira ou falsa
// //!() negação
// console.log(!(idade3 > 18)); // Negação (está dizendo que não é maior de 18, inverte o valor)
//#endregion

//#region - Uso dos O.P
// const idade = 25;
// const matriculaAtiva = true;

// const podeComprar = idade >= 18 && matriculaAtiva;

// console.log(podeComprar);
//#endregion

//#region - Operadores de incremento e decremento
// let numero = 10;
// console.log(numero++); //10, só adiciona depois
// console.log(numero); //11
// console.log(++numero); //12, adiciona direto

// console.log(numero--) //12
// console.log(numero) //11
// console.log(--numero) //10

//#endregion

//#region - Exercício Comparadores
const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); // comparação de valor
console.log(x === y);// comparação de valor e tipo
console.log(x !== y); // diferentes
//#endregion

//#region - Verifique os resultados das comparações a seguir:
console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined); 

console.log(null === undefined); 
//#endregion

//#region - Exercício Sistema de Acesso

const dataNascimento = new Date("2000-10-09");
const ativo = true;
const calculo = (new Date() - dataNascimento);

//Transformando 18 anos em milissegundos
const dezoitoemMilissegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

//comparando milissegundos com milissegundos!
const podeAcessar = (new Date() - dataNascimento) >= dezoitoemMilissegundos && ativo;
console.log(podeAcessar)

//#endregion

//#region - 