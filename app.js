let tituloQuestao = document.getElementById("titulo"); // Acessa o título na página HTML
let pergunta = document.getElementById("pergunta"); // Acessa a pergunta na página HTML
let explicacao = document.getElementById("feedback"); // Acessa a explicação na página HTML
let opcaoA = document.getElementById("opcaoA");
let opcaoB = document.getElementById("opcaoB");
let opcaoC = document.getElementById("opcaoC");
let opcaoD = document.getElementById("opcaoD");
let opcaoE = document.getElementById("opcaoE");
let section = document.getElementById("explicacao");
let questaoAtual = 0; // Índice da questão atual
let respostasUsuario = ""; // Armazena as respostas do usuário

// Array com mensagens de erro aleatórias
const mensagensDeErro = [
    "Ops! Algo deu errado. Tente novamente.",
    "Parece que você se perdeu por aqui. Vamos tentar outro caminho?",
    "Ih, deu pau! Mas não desanime, a vida é assim mesmo.",
    "Essa não foi a resposta que estávamos esperando. Quer tentar de novo?"
]

// Imprime o índice da questão atual e as respostas do usuário no console
console.log(questaoAtual);
console.log(respostasUsuario);

// Função para limpar o estilo das opções de resposta
function limparEscolhas() {
    opcaoA.style.backgroundColor = "white";
    opcaoB.style.backgroundColor = "white";
    opcaoC.style.backgroundColor = "white";
    opcaoD.style.backgroundColor = "white";
    opcaoE.style.backgroundColor = "white";
}

// Função para gerar uma mensagem de erro aleatória
function gerarMensagemDeErroAleatoria() {
    // Gera um índice aleatório dentro do array de mensagens de erro
    const indiceAleatorio = Math.floor(Math.random() * mensagensDeErro.length);
    // Retorna a mensagem de erro correspondente ao índice aleatório
    return mensagensDeErro[indiceAleatorio];
}

// Função para mostrar a questão atual
function mostrarQuestao(indice) {
    // Limpa o estilo das opções de resposta
    limparEscolhas();
    // Define o título da questão atual
    tituloQuestao.textContent = questoes[indice].titulo;
    // Define o texto da pergunta atual
    pergunta.textContent = questoes[indice].pergunta;

    // Define o texto das opções de resposta
    opcaoA.textContent = questoes[indice].alternativas[0];
    opcaoB.textContent = questoes[indice].alternativas[1];
    opcaoC.textContent = questoes[indice].alternativas[2];
    opcaoD.textContent = questoes[indice].alternativas[3];
    opcaoE.textContent = questoes[indice].alternativas[4];
}

// Função para mostrar a explicação da resposta
function mostrarExplicacao(validador) {
    // Se a resposta estiver correta...
    if (validador) {
        // Define o conteúdo da seção de explicação como a explicação correta
        section.innerHTML = `
        <div class="item-resultado">
            <p>Para que um corpo esteja tranquilinho e paradinho, ou seja, em equilíbrio estático, ele precisa estar quietinho no lugar e não querer rodar. Isso significa que nenhuma força externa pode estar tentando movimentá-lo (soma das forças igual a zero) e que nenhuma força está tentando girá-lo (momento resultante igual a zero). Se alguma força ou momento estiver sobrando, é como se alguém estivesse cutucando o corpo para ele sair do lugar ou girar, aí ele não está em equilíbrio!</p>
        </div>
        `;
    } else {
        // Se a resposta estiver incorreta...
        // Define o conteúdo da seção de explicação como uma mensagem de erro aleatória
        section.innerHTML = gerarMensagemDeErroAleatoria();
    }
}

// Funções para lidar com a escolha do usuário
function escolhaA() {
    // Limpa o estilo das opções de resposta
    limparEscolhas();
    // Define a resposta do usuário como 0
    questoes[questaoAtual].respostasUsuario = 0;
    // Verifica se a resposta do usuário está correta
    validador = questoes[questaoAtual].respostasUsuario == questoes[questaoAtual].respostaCerta;
    // Imprime o resultado da validação no console
    console.log(validador);
    // Se a resposta estiver correta...
    if (validador) {
        // Define a cor de fundo da opção A como azul
        opcaoA.style.backgroundColor = "#6495ED";
    } else {
        // Se a resposta estiver incorreta...
        // Define a cor de fundo da opção A como vermelho
        opcaoA.style.backgroundColor = "#FF0000";
    }
    // Mostra a explicação da resposta
    mostrarExplicacao(validador);
}

function escolhaB() {
    // Limpa o estilo das opções de resposta
    limparEscolhas();
    // Define a resposta do usuário como 1
    questoes[questaoAtual].respostasUsuario = 1;
    // Verifica se a resposta do usuário está correta
    validador = questoes[questaoAtual].respostasUsuario == questoes[questaoAtual].respostaCerta;
    // Se a resposta estiver correta...
    if (validador) {
        // Define a cor de fundo da opção B como azul
        opcaoB.style.backgroundColor = "#6495ED";
    } else {
        // Se a resposta estiver incorreta...
        // Define a cor de fundo da opção B como vermelho
        opcaoB.style.backgroundColor = "#FF0000";
    }
    // Mostra a explicação da resposta
    mostrarExplicacao(validador);
}

function escolhaC() {
    // Limpa o estilo das opções de resposta
    limparEscolhas();
    // Define a resposta do usuário como 2
    questoes[questaoAtual].respostasUsuario = 2;
    // Verifica se a resposta do usuário está correta
    validador = questoes[questaoAtual].respostasUsuario == questoes[questaoAtual].respostaCerta;
    // Se a resposta estiver correta...
    if (validador) {
        // Define a cor de fundo da opção C como azul
        opcaoC.style.backgroundColor = "#6495ED";
    } else {
        // Se a resposta estiver incorreta...
        // Define a cor de fundo da opção C como vermelho
        opcaoC.style.backgroundColor = "#FF0000";
    }
    // Mostra a explicação da resposta
    mostrarExplicacao(validador);
}

function escolhaD() {
    // Limpa o estilo das opções de resposta
    limparEscolhas();
    // Define a resposta do usuário como 3
    questoes[questaoAtual].respostasUsuario = 3;
    // Verifica se a resposta do usuário está correta
    validador = questoes[questaoAtual].respostasUsuario == questoes[questaoAtual].respostaCerta;
    // Se a resposta estiver correta...
    if (validador) {
        // Define a cor de fundo da opção D como azul
        opcaoD.style.backgroundColor = "#6495ED";
    } else {
        // Se a resposta estiver incorreta...
        // Define a cor de fundo da opção D como vermelho
        opcaoD.style.backgroundColor = "#FF0000";
    }
    // Mostra a explicação da resposta
    mostrarExplicacao(validador);
}

function escolhaE() {
    // Limpa o estilo das opções de resposta
    limparEscolhas();
    // Define a resposta do usuário como 4
    questoes[questaoAtual].respostasUsuario = 4;
    // Verifica se a resposta do usuário está correta
    validador = questoes[questaoAtual].respostasUsuario == questoes[questaoAtual].respostaCerta;
    // Se a resposta estiver correta...
    if (validador) {
        // Define a cor de fundo da opção E como azul
        opcaoE.style.backgroundColor = "#6495ED";
    } else {
        // Se a resposta estiver incorreta...
        // Define a cor de fundo da opção E como vermelho
        opcaoE.style.backgroundColor = "#FF0000";
    }
    // Mostra a explicação da resposta
    mostrarExplicacao(validador);
}

// Função para ir para a questão anterior
function anterior() {
    // Se houver uma questão anterior...
    if (questaoAtual > 0) {
        // Decrementa o índice da questão atual
        questaoAtual--;
        // Mostra a questão atual
        mostrarQuestao(questaoAtual);
        // Limpa a seção de explicação
        section.innerHTML = "";
    }
}

// Função para ir para a próxima questão
function proxima() {
    // Se houver uma próxima questão...
    if (questaoAtual < questoes.length - 1) {
        // Incrementa o índice da questão atual
        questaoAtual++;
        // Mostra a questão atual
        mostrarQuestao(questaoAtual);
        // Limpa a seção de explicação
        section.innerHTML = "";
    }
}

// Executa a função mostrarQuestao para mostrar a primeira questão ao carregar a página
mostrarQuestao(questaoAtual);