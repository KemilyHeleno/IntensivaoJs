// const nomeProduto = "Vestido Preto";
// const marcaProduto = "Zara";
// const precoProduto = 111.90;
// const nomeArquivoImagem = "1.png";

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
    nomeProduto: "Vestido Verde Escuro",
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
  }
];

for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `<div id="card-produto-1"> <!-- divisão entre produtos -->
    <img 
        src="./assets/images/${produtoCatalogo.nomeArquivoImagem}" 
        alt="Produto." 
        style="height: 200px;"
    />
    <p class='nomeMarca'>${produtoCatalogo.marcaProduto}</p>
    <p>${produtoCatalogo.nomeProduto}</p>
    <p>R$ ${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;

  document.getElementById("container-produto").innerHTML += cartaoProduto; // Recupere um elemento a partir do id dele
}
