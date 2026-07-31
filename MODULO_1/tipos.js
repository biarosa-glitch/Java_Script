// Tipos de variáveis ----
const nome = "Bianca"; //string
const idade = 16; //number
const programador = true; //boolean

console.log(typeof nome); // - declara o tipo da variável "nome" (string)
console.log(typeof idade); // - declara o tipo da variável "idade" (number)
console.log(typeof programador); // - declara o tipo da variável "nome" (boolean)

//---------- String ----------
const nome2 = "Maria";
const cidade = "São Paulo";
const idade2 = 20;
const altura = 1.85;
const possuiTatuagem = true;
 
// Forma 1 - interpolação de string
console.log(`Meu nome é ${nome2} e tenho ${idade2} anos. Tenho ${altura}m de altura e moro na cidade de ${cidade}. Tenho tatuagem?: ${possuiTatuagem}.`);

// Forma 2 - concatenação de string
console.log("Meu nome é " + nome2 + " e tenho " + idade2 + " anos. Tenho " + altura + "m de altura e moro na cidade de " + cidade + ". Tenho tatuagem?: " + possuiTatuagem + ".");

// Tipos de variáveis & soma de string com number -----
const altura2 = 1.75;
const temperatura = -10;
console.log(typeof altura2);
console.log(typeof temperatura);

console.log("10" + 5); // JS vai considerar o number uma string e vai uní-los
console.log('10' + 5); // JS vai considerar o number uma string e vai uní-los

//If & else com boolean ----

let maiorIdade = true;
const idade3 = 16;
 //Validação
if (idade3 >= 18) {
    console.log("O usuário é maior de idade.")
}

else {
    maiorIdade = false;
    console.log("O usuário é de menor.")
    console.log(maiorIdade);
}

console.log(maiorIdade)

// Undefined e null

let nome3;
nome = "dez";
console.log(nome3); // undefined até ter algo atribuído
console.log(typeof nome3);

let usuário = null;
console.log(usuário);
console.log(typeof usuário);