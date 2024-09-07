let questoes = [
    // Questão 01
    {
        titulo: "Equilíbrio de um Corpo",
        pergunta: "Para que um corpo rígido esteja em equilíbrio estático, quais condições devem ser atendidas?",
        alternativas: [
            "A soma das forças externas deve ser nula e o momento resultante de todas as forças em relação a qualquer ponto deve ser diferente de zero.",
            "A soma das forças externas deve ser diferente de zero e o momento resultante de todas as forças em relação a qualquer ponto deve ser nulo.",
            "A soma das forças externas e o momento resultante de todas as forças em relação a qualquer ponto devem ser nulos.",
            "A soma das forças externas deve ser nula e o momento resultante de todas as forças em relação a um ponto específico deve ser nulo.",
            "Nenhuma das alternativas anteriores."
        ],
        respostaCerta: 2, // Índice da resposta correta (começando em 0)
        explicacao: "Para que um corpo esteja tranquilinho e paradinho, ou seja, em equilíbrio estático, ele precisa estar quietinho no lugar e não querer rodar. Isso significa que nenhuma força externa pode estar tentando movimentá-lo (soma das forças igual a zero) e que nenhuma força está tentando girá-lo (momento resultante igual a zero). Se alguma força ou momento estiver sobrando, é como se alguém estivesse cutucando o corpo para ele sair do lugar ou girar, aí ele não está em equilíbrio!",
        respostaUsuario:"",
        pontuacao:0
    },
    
    // Questão 02
    {
        titulo: "Força Resultante",
        pergunta: "Qual é a força que, sozinha, produz o mesmo efeito que um sistema de forças?",
        alternativas: [
            "Força equilibrante", 
            "Força resultante", 
            "Força normal", 
            "Força de atrito", 
            "Força peso"
        ],
        respostaCerta: 1,
        explicacao: "A força resultante é como o chefe de uma gangue de forças: ela manda em todo mundo! É a força única que faz tudo o que as outras forças fazem juntas. É tipo a força do Hulk, só que mais organizada.",
        respostaUsuario:"",
        pontuacao:0
    },
    
    // Questão 03
    {
        titulo: "Centro de Gravidade",
        pergunta: "Onde está localizado o ponto de aplicação da força peso de um corpo?",
        alternativas: [
            "Sempre no centro geométrico do corpo", 
            "No ponto mais alto do corpo", 
            "No ponto mais baixo do corpo", 
            "No centro de gravidade do corpo", 
            "Depende do material do corpo"
        ],
        respostaCerta: 3,
        explicacao: "O centro de gravidade é tipo o 'umbigo' de um corpo. É o ponto onde você pode equilibrar o corpo com um único dedo. Se você tentar equilibrar um martelo pelo centro da haste, vai dar tudo errado! Mas se você equilibrar pelo centro de gravidade, fica tudo tranquilo.",
        respostaUsuario:"",
        pontuacao:0
    },

    // Questão 04
    {
        titulo: "Momento Fletor: O Torcedor da Viga",
        pergunta: "Imagine uma viga sendo flexionada. O momento fletor é como um casalzinho que quer torcer a viga, enquanto a força cortante é tipo um grupo de amigos que quer cortar a viga ao meio. Qual a fórmula geral do momento fletor em uma viga simplesmente apoiada com carga concentrada no meio?",
        alternativas: [
            "M = P*L/2",
            "M = P*L",
            "M = P*L^2/8",
            "M = P*L/4",
            "Nenhuma das alternativas"
        ],
        respostaCerta: 2,
        explicacao: "A fórmula M = P*L^2/8 é a rainha das vigas simplesmente apoiadas! Ela te diz exatamente quanto aquele casalzinho está torcendo a viga. É como ter um manual de instruções para vigas.",
        respostaUsuario:"",
        pontuacao:0
    },
      
    // Questão 05    
    {
        titulo: "Tensão Normal: A Vontade de Voltar para Casa",
        pergunta: "Um elástico esticado tem uma tensão normal de tração. Se você comprimir uma mola, qual tipo de tensão normal ela terá?",
        alternativas: [
            "Tensão de cisalhamento",
            "Tensão normal de tração",
            "Tensão normal de compressão",
            "Não há tensão",
            "Tensão térmica"
        ],
        respostaCerta: 2,
        explicacao: "A mola comprimida está com muita vontade de voltar ao seu tamanho original, assim como um elástico esticado. Só que no caso da mola, a tensão é de compressão, pois as forças estão tentando esmagar as partículas.",
        respostaUsuario:"",
        pontuacao:0
    },

    // Questão 06
    {
        titulo: "Tensão de Cisalhamento: A Tesoura Molecular",
        pergunta: "Imagine duas placas sobrepostas sendo empurradas uma contra a outra. As moléculas dessas placas sentem uma vontade enorme de se separarem. Essa força é chamada de tensão de cisalhamento. Qual a diferença entre tensão de cisalhamento e tensão normal?",
        alternativas: [
            "Não há diferença, são a mesma coisa.",
            "A tensão de cisalhamento tenta esticar o material, enquanto a tensão normal tenta comprimir.",
            "A tensão de cisalhamento tenta cortar o material, enquanto a tensão normal tenta esticá-lo ou comprimi-lo.",
            "A tensão de cisalhamento só ocorre em líquidos.",
            "Nenhuma das alternativas."
        ],
        respostaCerta: 2,
        explicacao: "A tensão de cisalhamento é como uma tesoura molecular, tentando cortar o material ao meio. Já a tensão normal tenta esticar ou comprimir o material, como um elástico ou uma mola.",
        respostaUsuario:"",
        pontuacao:0
    },

    // Questão 07
    {
        titulo: "Momento de Inércia: A Resistência à Rotação",
        pergunta: "O momento de inércia é como a massa, mas para a rotação. Ele indica a resistência de um corpo à mudança em seu estado de rotação. Qual a relação entre o momento de inércia e a rigidez de uma viga?",
        alternativas: [
            "Não há relação.",
            "Quanto maior o momento de inércia, menor a rigidez da viga.",
            "Quanto maior o momento de inércia, maior a rigidez da viga.",
            "O momento de inércia só afeta a torção, não a flexão.",
            "Nenhuma das alternativas."
        ],
        respostaCerta: 2,
        explicacao: "Imagine uma viga como uma barra de chocolate. Quanto mais larga e espessa ela for, mais difícil será torcê-la. O momento de inércia é como a medida dessa resistência à torção.",
        respostaUsuario:"",
        pontuacao:0
    },

    // Questão 08
    {
        titulo: "Método dos Elementos Finitos: Quebrando o Problema em Pedacinhos",
        pergunta: "O método dos elementos finitos é uma ferramenta poderosa para analisar estruturas complexas. Ele divide a estrutura em pequenos elementos e resolve um sistema de equações para cada elemento. Qual a principal vantagem desse método?",
        alternativas: [
            "É muito simples de aplicar manualmente.",
            "Permite analisar apenas estruturas simples.",
            "Permite analisar estruturas com geometrias complexas e carregamentos arbitrários.",
            "Não requer o uso de computadores.",
            "Nenhuma das alternativas."
        ],
        respostaCerta: 2,
        explicacao: "O método dos elementos finitos é como um quebra-cabeça. Ao dividir a estrutura em pedacinhos, podemos analisar cada parte individualmente e depois montar o quebra-cabeça de volta. Isso permite analisar estruturas bem complexas, como carros, aviões e pontes.",
        respostaUsuario:"",
        pontuacao:0
    },

    // Questão 09
    {
        titulo: "Diagrama Tensão-Deformação: A Impressão Digital do Material",
        pergunta: "O diagrama tensão-deformação é como a impressão digital de um material. Ele mostra como um material se comporta quando submetido a uma carga. Qual região do diagrama representa a deformação elástica?",
        alternativas: [
            "Região de encruamento",
            "Região plástica",
            "Região elástica",
            "Região de ruptura",
            "Nenhuma das alternativas"
        ],
        respostaCerta: 2,
        explicacao: "A região elástica é como um elástico que volta ao seu tamanho original após ser esticado. Nessa região, a deformação é proporcional à tensão e o material recupera sua forma original quando a carga é removida.",
        respostaUsuario:"",
        pontuacao:0
    },

    // Questão 10
    {
        titulo: "Dureza: A Resistência à Penetração",
        pergunta: "A dureza de um material é sua resistência à penetração de um objeto mais duro. Qual dos seguintes ensaios é utilizado para medir a dureza de um material?",
        alternativas: [
            "Ensaio de tração",
            "Ensaio de compressão",
            "Ensaio de flexão",
            "Ensaio de dureza Brinell",
            "Nenhum dos ensaios"
        ],
        respostaCerta: 3,
        explicacao: "O ensaio de dureza Brinell utiliza uma esfera de aço temperado para penetrar na superfície do material. A profundidade da penetração indica a dureza do material.",
        respostaUsuario:"",
        pontuacao:0
    },

    // Questão 11
    {
        titulo: "Fadiga dos Materiais: A Morte por Mil Cortes",
        pergunta: "A fadiga é um fenômeno que leva à ruptura de um material sob cargas cíclicas repetidas, mesmo que essas cargas sejam inferiores ao limite de resistência do material. Qual fator influencia significativamente a vida à fadiga de um material?",
        alternativas: [
            "Temperatura",
            "Umidade",
            "Tensão média",
            "Todos os fatores acima",
            "Nenhum dos fatores"
        ],
        respostaCerta: 3,
        explicacao: "A tensão média, ou seja, o valor médio da tensão cíclica, tem uma grande influência na vida à fadiga. Uma tensão média mais alta geralmente leva a uma vida à fadiga menor.",
        respostaUsuario:"",
        pontuacao:0
    }
];