function iniciarQuiz() {
  document.getElementById("capa").style.display = "none"; // esconde a introdução
  document.getElementById("quiz").style.display = "block";     // mostra o quiz
  document.getElementById("proxima").style.display = "inline-block";
  mostrarpergunta(); 
}


const perguntas = [
  {
      pergunta: "Em Jogos Vorazes, o que simboliza a revolução contra a Capital?",
         opcoes: [
            "Um raio",
            "Uma águia",
            "Um tordo",
            "A rosa branca"
        ],
      certa: 2
 },

     {
        pergunta: "Qual é a profissão de Olive em A Hipotese do Amor",
        opcoes: [
            "Doutoranda em neurociência",
            "Professora",
            "Bióloga",
            "Química"
        ],
        certa: 0
        },

    {
        pergunta: "Em Harry Potter, qual é o nome do banco mágico onde os bruxos guardam seu dinheiro?",
        opcoes: [
            "Borgin & Burkes",
            "Gringotes",
            "Azkaban",
            "Olivaras"
        ],
        certa: 1
    },

    {
        pergunta: "O povo do Ar é uma série escrita por:",
        opcoes: [
            "Cassandra Clare",
            "Leigh Bardugo",
            "Holly Black",
            "V.E. Schwab"
        ],
        certa: 2
    },
    {
        pergunta: "A Biblioteca da Meia-Noite, de Matt Haig, gira em torno de",
        opcoes: [
            "Uma biblioteca com livros raros",
            "Uma garota que escreve cartas para os mortos",
            "Mundos paralelos e escolhas de vida",
            "Um clube de leitura secreto"
        ],
        certa: 2
    },
    {
        pergunta: "A Culpa é das Estrelas, gira em torno de qual doença?",
        opcoes: [
            "Câncer",
            "Alzheimer",
            "Depressão",
            "Esclerose múltipla"
        ],
        certa: 0
    },
    {
        pergunta: "Vidas Secas, de Graciliano Ramos, retrata qual região do Brasil?",
        opcoes: [
            "Amazônia",
            "Sudeste",
            "Nordeste",
            "Centro-Oeste"
        ],
        certa: 2
    },
    {
        pergunta: "Qual é o apelido que Zezé dá ao seu pé de laranja lima?",
        opcoes: [
            "Tiziu",
            "Laranjinha",
            "Minguinho",
            "Xururuca"
        ],
        certa: 2
    },

    {
        pergunta: "Quem é a protagonista da série ACOTAR?",
        opcoes: [
            "Feyre Archeron",
            " Elain Archeron",
            "Nesta Archeron",
            "Morrigan"
        ],
        certa: 0
    },

    {
        pergunta: "Qual é o romance mais famoso de José de Alencar, protagonizado por uma indígena?",
        opcoes: [
            "Lúcia",
            "Iracema",
            "Lucíols",
            "Senhora"
        ],
        certa: 1
    },
];

let atual = 0;
let pontuacao = 0;

function mostrarpergunta(){
    const p =perguntas[atual];
    document.getElementById("pergunta").textContent = p.pergunta;

    const opcoescaixa = document.getElementById("opcoes");
    opcoescaixa.innerHTML = "";

    p.opcoes.forEach((opcao,index) => {
        const div = document.createElement("div");
div.textContent = opcao;
div.className = "opcao";
div.onclick = () => selecionar(index);
opcoescaixa.appendChild(div)

    });
}
function selecionar(indice) {
    const certa = perguntas[atual].certa;
    if (indice === certa) {
        pontuacao++;
    }
      document.querySelectorAll(".opcao").forEach((div, i) => {
     div.style.background = i === certa ? "#abfcaf" : "#a8b1ae";
     div.onclick = null;
       });
     }
  function proximapergunta() {
    atual++;
    if(atual < perguntas.length) {
        mostrarpergunta();
    } else{
        document.getElementById("quiz").style.display = "none";

        localStorage.setItem("pontuacaofinal", pontuacao);
        
        document.getElementById("resultado").innerHTML =`
        <h2> RESULTADO </h2>
        <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>
    `;
        }
    }
     window.onload = function () {
  const ultima = localStorage.getItem("pontuacaofinal");

 };