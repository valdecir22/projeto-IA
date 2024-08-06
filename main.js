const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado: "A utilização de fardas no colgios ccm são obrigatorios em sua opinião isso é certo?",
       alternativas: [
           {
               texto: "não",
               afirmacao: "Pois isso é algo irrelevante na aprennizagem "
           },
           {
               texto: "sim ",
               afirmacao: "Pois traz as caracteristicas do colegio"
           }
       ]
   },
   {
       enunciado: "As grandes exigencias das vestimentas, dos colegio ccm tem relevância na aprendisagem?",
       alternativas: [
           {

            texto: "Isso é maravilhoso!",       
                    afirmacao: "Resposta 1"
           },
           {
               texto: "Negativo",
               afirmacao: "Resposta 2"
           }
       ]
   },
   {
       enunciado: "Como os Colégios Cívico-Militares combinam elementos da educação civil com os valores e práticas militares?",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "Resposta 1"
           },
           {
               texto: "Negativo",
               afirmacao: "Resposta 2"
           }
       ]
   },
   {
       enunciado: "Quais são os principais benefícios educacionais oferecidos pelos Colégios Cívico-Militares em comparação com escolas tradicionais?",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "Resposta 1"
           },
           {
               texto: "Negativo",
               afirmacao: "Resposta 2"
           }
       ]
   },
   {
       enunciado: "Como os Colégios Cívico-Militares combinam elementos da educação civil com os valores e práticas militares?",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: ""
           },
           {
               texto: "Negativo",
               afirmacao: "Resposta 2"
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