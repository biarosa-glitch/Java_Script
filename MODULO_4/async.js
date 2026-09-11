//Async

//No promise
buscarUsuario().then(usuario => {
    console.log(usuario);
});

// async/await -
//Essa função vai funcionar de forma assincrona e vai ter um pedaço que vamos precisar esperar.

//No async-await
async function buscarUsuarioAsync() {

    try {
        //aqui é o que quero que aconteça
        const usuario = await buscarUsuario(idBuscado);
        console.log(usuario);
    }
    catch (erro) {
        //erro que rolou
        console.log(erro);
    }
};