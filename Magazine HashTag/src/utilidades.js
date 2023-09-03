export const catalogo = [
  {
    id: "1",
    nomeProduto: "Vestido Preto",
    marcaProduto: "Shein",
    preco: 111.9,
    nomeArquivoImagem: "1.png",
    feminino: true,
  },
  {
    id: "2",
    nomeProduto: "Vestido Verde Escuro",
    marcaProduto: "Shein",
    preco: 150.5,
    nomeArquivoImagem: "2.png",
    feminino: true,
  },
  {
    id: "3",
    nomeProduto: "Regata Justinha Branca",
    marcaProduto: "Shein",
    preco: 185.0,
    nomeArquivoImagem: "3.png",
    feminino: true,
  },
  {
    id: "4",
    nomeProduto: "Calça Verde Escuro",
    marcaProduto: "Shein",
    preco: 79.9,
    nomeArquivoImagem: "4.png",
    feminino: false,
  },
  {
    id: "5",
    nomeProduto: "Camiseta Cinza",
    marcaProduto: "Shein",
    preco: 123.3,
    nomeArquivoImagem: "5.png",
    feminino: false,
  },
  {
    id: "6",
    nomeProduto: "Camiseta Nude Gamer",
    marcaProduto: "Shein",
    preco: 83.7,
    nomeArquivoImagem: "6.png",
    feminino: false,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));

  /*
    Salva o local onde estão salvas as quantidades de
    cada item armazenado no carrinho e transforma em texto
    para que o localhost do navegador possa armazenar essas informações
  */
}

// A função de baixo faz o inverso da de cima e vice-versa

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));

  /*
    Recupera os dados que foram salvos no localhost na
    forma de texto e os transforma em objeto para que
    facilite a manipulação dentro do código
  */
}

export function apagarDoLocalStorage(chave){

}

export function desenharProdCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2"
  ];
  // <article class="flex bg-slate-100 rounded-lg relative">

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  const cartaoProdutoCarrinho = `
  <img
    src="./assets/images/${produto.nomeArquivoImagem}"
    alt="Carrinho: ${produto.nomeProduto}"
    class="h-24 rounded-lg"
  />
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900  pl-2 text-sm">${produto.nomeProduto}</p>
    <p class="text-slate-600  pl-2 text-xs">Tamanho: M</p>
    <p class="text-green-700  pl-2 text-sm">R$ ${produto.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <p id="quantidade-${produto.id}" class="ml-2">
    ${quantidadeProduto}
  </p>
  </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;

  containerProdutosCarrinho.appendChild(elementoArticle);
}
