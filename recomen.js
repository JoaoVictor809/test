
        const button = document.getElementById('toggle-dark-mode');
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        })
    

const grupoRecomendacoes = [
    {nome: "Tainá <3", livro: "Até o verão terminar", motivo: "É um dos livros que você não percebe o tempo passar, um romance lee no início mas com ao passar do tempo você percebe que ali, a um broto de uma dependência emocional junto. "},
    {nome: "Julia ^^", livro: "Arara Vermelha - José Mauro Vasconcelos", motivo: "Obra maravilhosa, faz enxergar o protagonista de diversos ângulos e simpatizar com suas questões. Nos aproxima de suas crenças e de certo, nos envolve num passado não tão distante."},
    {nome: "Gabriela '3'", livro:"Uma vida pequena - Hanya Yanagihara", motivo: "Ele te obriga a refletir sobre os traumas, os limites do amor, da amizade e até onde vai a resistência de uma pessoa que carrega cicatrizes que ninguém vê."},
    {nome: "Kauany ><", livro: "Xeque-Mate - Ali Hazelwood", motivo: "O livro traz um romance leve, perfeito para ler em um dia frio tomando um chocolate quente."},
    {nome: "Naira XD", livro: "Cidade de Deus", motivo: "Recomendo o livro por retratar uma realidade periférica que gerou identificação, nos traz uma reflexão importante nos dias atuais."},
    {nome: "Giovana :P", livro:"Para Todos os Garotos que Já Amei –  Jenny Han", motivo: "Um romance leve e divertido sobre amores adolescentes e autoconhecimento. Bom para quem curte histórias românticas e sinceras."},
    {nome: "João Pedro :D", livro: "O Senhor dos Anéis – J. R. R. Tolkien", motivo: "Uma aventura épica de fantasia com temas como coragem, amizade e a luta entre o bem e o mal. Perfeito para quem gosta de mundos complexos e heroísmo."}
]; /array/
const containerGrupo = document.getElementById("recomendacoesGrupo");
grupoRecomendacoes.forEach(({nome, livro, motivo}) =>{
    const div = document.createElement("div");
    div.className = "recomendacao";
    div.innerHTML = `<h3>${livro}</h3>
    <p><strong>Recomendado por: </strong> ${nome}</p>
    <p>Motivo:</p>${motivo}`;
    containerGrupo.appendChild(div);
}); 
const form = document.getElementById("formRecomendacao");
const containerLeitor = document.getElementById("recomendacoesLeitores");
function exibirRecomendacoesSalvas(){
    const salvas = JSON.parse(localStorage.getItem("recomendacoesLeitor")) || [];

    salvas.forEach(({nome, livro, motivo}) =>{
        adicionarRecomendacao(nome, livro, motivo);
});
}
function adicionarRecomendacao(nome, livro, motivo){
    const div = document.createElement("div");
    div.className = "recomendacao";
    div.innerHTML = `
    <h3>${livro} </h3>
     <p> <strong>Recomendado por:</strong>${nome}</p>
     <p><em>${motivo}</em></p>`;
     containerLeitor.appendChild(div);
}
form.addEventListener("submit", function(event){
    event.preventDefault();
    const nome = document.getElementById("nomeleitor").value;
    const livro = document.getElementById("livrorecomendado").value;
    const motivo = document.getElementById("motivo").value;
    
    adicionarRecomendacao(nome, livro, motivo);

  const recomendacoes = JSON.parse(localStorage.getItem("recomendacoesLeitor")) || [];
  recomendacoes.push({ nome, livro, motivo });
  localStorage.setItem("recomendacoesLeitor", JSON.stringify(recomendacoes));

  form.reset();
  /evento para resetar os campos do formulário quando preenchido, ele fica limpo/
});
    exibirRecomendacoesSalvas();
    