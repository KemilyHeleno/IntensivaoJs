import { inicializarCarrinho } from "./src/menuCarrinho";
const catalogo = [
  {
    id: 1,
    nomeProduto: "Vestido Preto",
    marcaProduto: "Shein",
    preco: 111.9,
    nomeArquivoImagem: "1.png",
  },
  {
    id: 2,
    nomeProduto: "Vestido Verde Escuro",
    marcaProduto: "Shein",
    preco: 150.0,
    nomeArquivoImagem: "2.png",
  },
  {
    id: 3,
    nomeProduto: "Regata Justinha Branca",
    marcaProduto: "Shein",
    preco: 150.0,
    nomeArquivoImagem: "3.png",
  },
  {
    id: 4,
    nomeProduto: "Vestido Verde Escuro",
    marcaProduto: "Shein",
    preco: 150.0,
    nomeArquivoImagem: "4.png",
  },
  {
    id: 5,
    nomeProduto: "Vestido Verde Escuro",
    marcaProduto: "Shein",
    preco: 150.0,
    nomeArquivoImagem: "5.png",
  },
  {
    id: 6,
    nomeProduto: "Vestido Verde Escuro",
    marcaProduto: "Shein",
    preco: 150.0,
    nomeArquivoImagem: "6.png",
  },
];
// console.log("funcionei");
for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
    <img 
        src="./assets/images/${produtoCatalogo.nomeArquivoImagem}" 
        alt="Produto." 
        style="height: 255px;"
    />
    <p class='nomeMarca'>${produtoCatalogo.marcaProduto}</p>
    <p>${produtoCatalogo.nomeProduto}</p>
    <p>R$ ${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;
  document.getElementById("container-produto").innerHTML += cartaoProduto;
}
// console.log("passei");

inicializarCarrinho();