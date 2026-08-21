//#region - Atividade 1 - Saudação
console.log("\nAtividade 01.")
function saudacao(nome){
    return nome;
}

const saud1 = saudacao("Maria");
console.log("Olá, " + saud1 + "!");
//#endregion

//#region - Atividade 2 - Calculadora

console.log("\nAtividade 02.")
function somar(numero1, numero2){
     return(numero1 + numero2);
 }

const resultado = somar(8, 3);
console.log(resultado);

function subtrair(numero3, numero4){
     return(numero3 - numero4);
 }

const resultado2 = subtrair(8, 3);
console.log(resultado2);

function multiplicar(numero4, numero5){
     return(numero4 * numero5);
 }

const resultado3 = multiplicar(10, 5);
console.log(resultado3);

function dividir(numero6, numero7){
     return(numero6 / numero7);
 }

const resultado4 = dividir(10, 5);
console.log(resultado4);
//#endregion

//#region - Atividade 03 - Verificação de idade
function verific(age){
    return age;
}

const idade = verific(17);
if (idade>= 18){
    console.log("Maior de Idade")
}
else {
    console.log("Menor de Idade.")
}
//#endregion

//#region - Atividade 04 - Arrow Function

const calcularDobro = (numero) => {
            return numero * 2;
        };

console.log(calcularDobro(3))