
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma aula, sua professora apresenta uma ferramenta de Inteligência Artificial capaz de responder perguntas, explicar conteúdos e ajudar nos estudos. Como você reage a essa novidade?",
        alternativas: [
            {
                texto: "Fico curioso e quero experimentar a ferramenta para aprender coisas novas.",
                afirmacao: "Demonstrou curiosidade e começou a explorar as possibilidades da Inteligência Artificial como ferramenta de aprendizagem. "
            },
            {
                texto: "Prefiro continuar estudando apenas com livros e explicações dos professores.",
                afirmacao: "Percebeu que os métodos tradicionais de ensino também são importantes e decidiu manter seus hábitos de estudo. "
            }
        ]
    },
    {
        enunciado: "Sua professora de história pediu uma pesquisa sobre a Revolução Industrial. Você percebe que uma ferramenta de IA pode ajudar na realização da atividade. O que você faz?",
        alternativas: [
            {
                texto: "Utilizo a IA para encontrar informações, entender o conteúdo e organizar minhas ideias para a pesquisa.",
                afirmacao: "Aprendeu a utilizar a Inteligência Artificial como apoio à pesquisa, desenvolvendo seus conhecimentos sobre o assunto. "
            },
            {
                texto: "Faço toda a pesquisa utilizando livros, materiais didáticos e sites indicados pela professora.",
                afirmacao: "Conseguiu realizar a pesquisa utilizando diferentes fontes de informação e desenvolveu sua autonomia nos estudos. "
            }
        ]
    },
    {
        enunciado: "Durante uma atividade, um colega entrega um trabalho inteiro produzido por Inteligência Artificial, sem ler ou verificar as informações. A professora pergunta à turma o que pensa sobre essa atitude. Qual é sua opinião?",
        alternativas: [
            {
                texto: "A IA pode ajudar na produção dos trabalhos, mas precisamos revisar as informações e desenvolver nossas próprias ideias.",
                afirmacao: "Compreendeu que a Inteligência Artificial deve ser utilizada de maneira responsável, valorizando o pensamento crítico e a aprendizagem. "
            },
            {
                texto: "Se a IA consegue fazer o trabalho, não vejo problema em entregar tudo o que ela produzir.",
                afirmacao: "Passou a utilizar a Inteligência Artificial para realizar suas atividades, mas percebeu que deixou de desenvolver habilidades importantes para sua aprendizagem. "
            }
        ]
    },
    {
        enunciado: "Na aula de artes, a professora propõe a criação de um cartaz sobre a preservação do meio ambiente. Ela permite que os alunos utilizem ferramentas de Inteligência Artificial. Como você pretende realizar a atividade?",
        alternativas: [
            {
                texto: "Crio o cartaz manualmente, utilizando desenhos, pinturas e minha criatividade.",
                afirmacao: "Desenvolveu sua criatividade por meio de técnicas tradicionais e percebeu que a tecnologia não substitui todas as formas de expressão artística. "
            },
            {
                texto: "Utilizo uma ferramenta de IA para gerar imagens e ideias que possam fazer parte do meu cartaz.",
                afirmacao: "Descobriu novas possibilidades criativas com a Inteligência Artificial e aprendeu a utilizar a tecnologia para desenvolver projetos escolares. "
            }
        ]
    },
    {
        enunciado: "A escola decidiu criar regras para orientar os estudantes sobre o uso da Inteligência Artificial nas atividades escolares. Entre os assuntos discutidos estão a privacidade, os erros nas respostas e a importância de não compartilhar dados pessoais. Qual atitude você considera mais adequada?",
        alternativas: [
            {
                texto: "Utilizar a IA livremente, compartilhando informações pessoais e confiando em todas as respostas fornecidas.",
                afirmacao: "Percebeu que utilizar a Inteligência Artificial sem cuidados pode trazer riscos e começou a refletir sobre a importância da segurança digital. "
            },
            {
                texto: "Utilizar a IA com responsabilidade, protegendo meus dados pessoais e verificando as informações antes de utilizá-las.",
                afirmacao: "Desenvolveu uma postura consciente sobre o uso da Inteligência Artificial, compreendendo a importância da ética, da privacidade e da verificação das informações no ambiente escolar. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
