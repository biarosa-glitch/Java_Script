// array [] / objeto {}

//Cadastro de usuário

function cadastroUsuario(id, nome, senha, cpf, email){
    return {
        id,
        nome,
        senha,
        cpf,
        email
    };
}

const usuario = cadastroUsuario(1, "Bianca", "AlunoMorreu#23", 93847652341, "x@gmail.com");
console.log(usuario);

//Com objeto eu agora consigo melhorar o que é exibido
console.log("Oi " + usuario.nome + " seu cadastro foi realizado com sucesso!")