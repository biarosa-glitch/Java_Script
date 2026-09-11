//Promises - é uma promessa que teremos um resultado no futuro
//formato
// ((parametros) => {logica});

//Criando uma promise

const promessa = new Promise((resolve, reject) => {
    const sucesso = false;

    if(sucesso){
        resolve("Tudo certo, amigão!")
    }
    else {
        reject("Deu errado :(")
    }
})

//consumir a promise
promessa
.then((resultado) => {
    console.log(resultado);
})
.catch((erro) => {
    console.log(erro)
});