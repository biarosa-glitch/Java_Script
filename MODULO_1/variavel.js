// Variável é um espaço na memoria para guardar um valor
// Existem duas formas de declarar variáveis no JS

const nome = "Bianca"; // Não existe mudança frequente na variável (const), usada em maior parte dos casos
nome = "Carlos Alberto da Nobrega"; // Mudança (console imprimiria Carlos caso a variável fosse declarada com LET)
console.log(nome); // Exibe a variável no terminal

let nome_pet = "Fred"; // Há mudança frequente na variável (let), como o dólar cujo valor muda mais de uma vez no mesmo dia
console.log(nome_pet); // Exibe a variável no terminal

const idade = 16;
idade = 18;
console.log(idade);

let idadeNova = 16;
idadeNova = 18;
console.log(idadeNova);