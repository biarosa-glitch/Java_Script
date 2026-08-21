// function quandoClicarNoBotao(){
//     console.log("Obrigado por comprar em nossa loja!");
// }
// //invocação da função
// quandoClicarNoBotao();

// function exibirMensagem(){
//     console.log("bebam água");
// }

// exibirMensagem();

//Mais simples de tudo (parâmetros)
//---------------------------------------

// function somar(){
//     const resultado = 8 + 3;
//     console.log(resultado);
// }
// somar();

//--- Reutilizável

// function somar(numero1, numero2){
//     return(numero1 + numero2);
// }

// const resultado = somar(8, 3);

// if(resultado>= 11){
//     console.log("O SENAI é massa");
// }
// else{
//     console.log("ainda assim é massa");
// }
/*
    console.log() é como mostrar o resultado em uma tela.
    return é como entregar o resultado para outra parte do programa utilizar
*/

//Declarar as constantes 
const valor = 400; 
const desconto = 20;
//Constante com calculo do valorFinal 
const valorFinal = calcularDesconto(valor, desconto);

//Chamas das funções 
calculoImposto(valorFinal);
cashBack(valorFinal);
parcelamento(valorFinal);

// #region Funções
function calcularDesconto(valor, desconto){
    return valor - desconto;   
}
//Imposto sobre produto
function calculoImposto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: " + valorImposto);
}
//Regra CashBack
function cashBack(valorFinal){
    if(valorFinal > 50){
        const cashBack = valorFinal*0.10;
        console.log("Valor do CashBack: " + cashBack);
    }
}

function parcelamento(valorFinal){
    if (valorFinal > 399) {
        // Compras acima de 399: sem juros
        const valorParcelado = valorFinal / 6;
        console.log("Valor das parcelas 6x sem juros: R$ " + valorParcelado); 
        
    } else if (valorFinal >= 100) {
        // Compras entre 100 e 399: com 2% de juros no total
        const valorParcelado = (valorFinal * 1.02) / 6;
        console.log("Valor das parcelas 6x com juros: R$ " + valorParcelado); 
        
    } else {
        // Compras abaixo de 100: não parcela
        console.log("O valor não atinge o mínimo de R$ 100 para parcelamento.");
    }
}
//#endregion


/*
    Regra de parcelamento
    R$ 100 já começa a parcelar + juros 2% do total
    
    Para ser sem juros acima R$399,00 
    o limite é 6 parcelas
*/

//função tradicional
function somarTrad(numero1, numero2){
    return numero1 + numero2;
}

//Arrow function
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log("Tradicional", somarTrad(8, 3));
console.log("Arrow function", somar(8, 3));