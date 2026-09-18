//Criar arquivo
const fs = require("fs/promises");
async function criarArquivo() {
    const livros = [
        {
            id: 1,
            titulo: "O Senhor do Anéis",
            autor: "J.R.R Tolkien"
        },
        {
            id: 2,
            titulo: "Harry Potter",
            autor: "J.K. Rowling"
        }
    ];

    //Criar o arquivo
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    console.log("Arquivo Criado com Sucesso!")
}

//Listar livros
async function listarLivros() {
    //Ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");
    //Transformar para objeto novamente
    const livros = JSON.parse(dados);
    //Exibir no console (futuramente, será o site)
    console.log(livros);
}

//Adicionar livro
async function adicionarLivro() {
    //Ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8")
    //Transformar para objeto novamente (parse)
    const livros = JSON.parse(dados);
    //Adicionar o livro (push)
    livros.push({
        id: 3, 
        nome: "Crepúsculo", 
        autor: "Stephenie Meyer"
    });
    //Retransformar o arquivo de um objeto para um JSON
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));
    //Exibir o livro adicionado
    console.log("Livro adicionado com sucesso!")
}

//Alterar livro
async function alterarLivro(id) {
    //Ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //Transformar o arquivo JSON para objeto
    const livros = JSON.parse(dados);

    //Descobrir o livro
        const livro = livros.find((livro) => livro.id === id);
        //logica - se não existir
        // ! => é como um false/negação do que foi atribuído na const acima
        if (!livro){
            console.log("Livro não encontrado");
            return;
        }
    
    //Alterar o livro
    livro.autor = "Bianca Rosa";

    //Retransformar de objeto para JSON
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //Exibir resultado
    console.log("Livro modificado com sucesso!")

}

//Deletar livro
async function deletarLivro(id) {
    //Ler arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //Transformar o arquivo de JSON para objeto
    const livros = JSON.parse(dados);

    //Procurar o livro que deseja ser deletado
    //logica - e se não existir/encontrar
        // ! => é como um false/negação do que foi atribuído na const acima
        if (!livros){
            console.log("Lista de livros não encontrado");
            return;
        }
    //Procurar o livro que deseja ser deletado + deletar seus dados
     const livrosAtualizados = livros.filter((livro) => livro.id !== id);

     if (livrosAtualizados.lenght === livros.lenght) {
        console.log("Livro", id, "não encontrado!");
        return;
     }
    

    //Retransformar para JSON novamente
    await fs.writeFile("livros.json", JSON.stringify(livrosAtualizados, null, 2));

    //Exibir resultado
    console.log("Dados do livro deletados com sucesso!")
}


//Função executar
async function executar() {
    await criarArquivo();
    await listarLivros();
    await adicionarLivro();
    await alterarLivro(2);
    await deletarLivro(1)
}

//Chama o início (endpoint)
executar();