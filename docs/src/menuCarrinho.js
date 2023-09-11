import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdCarComQuant = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
  console.log("Abre");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
  console.log("Fecha");
}

function irParaCheckout() {
  if (Object.keys(idsProdCarComQuant).length === 0) {
    return;
  }
  window.location.href = window.location.origin + "/checkout.html";
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const botaoIrParaCheckout = document.getElementById("finalizar-compra");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function desenharProdNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];
  // <article class="flex bg-slate-100 rounded-lg relative">

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  const cartaoProdutoCarrinho = `<button id="remover-item-${
    produto.id
  }" class="absolute top-0 right-2">
    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
  </button>
  <img
    src="./docs/assets/images/${produto.nomeArquivoImagem}"
    alt="Carrinho: ${produto.nomeProduto}"
    class="h-24 rounded-lg"
  />
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900  pl-2 text-sm">${produto.nomeProduto}</p>
    <p class="text-slate-600  pl-2 text-xs">Tamanho: M</p>
    <p class="text-green-700  pl-2 text-sm">R$ ${produto.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <button id="decrementar-produto-${produto.id}">-</button>
    <p id="quantidade-${produto.id}" class="ml-2">
    ${idsProdCarComQuant[produto.id]}
  </p>
    <button id="incrementar-produto-${produto.id}" class="ml-2">+</button>
  </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;

  containerProdutosCarrinho.appendChild(elementoArticle);
  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => decrementarQuantProd(produto.id));
  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantProd(produto.id));

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removeDoCarrinho(produto.id));
}

export function renderizarProdCar() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdCarComQuant) {
    desenharProdNoCarrinho(idProduto);
  }
}

function removeDoCarrinho(idProduto) {
  delete idsProdCarComQuant[idProduto];
  salvarLocalStorage("carrinho", idsProdCarComQuant);
  renderizarProdCar();
  atualizarPrecoCarrinho();
}

function incrementarQuantProd(idProduto) {
  idsProdCarComQuant[idProduto]++;
  salvarLocalStorage("carrinho", idsProdCarComQuant);
  atualizarInfoQuant(idProduto);
  atualizarPrecoCarrinho();
}

function decrementarQuantProd(idProduto) {
  if (idsProdCarComQuant[idProduto] === 1) {
    removeDoCarrinho(idProduto);
    return;
  }
  idsProdCarComQuant[idProduto]--;
  salvarLocalStorage("carrinho", idsProdCarComQuant);
  atualizarInfoQuant(idProduto);
  atualizarPrecoCarrinho();
}

function atualizarInfoQuant(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdCarComQuant[idProduto];
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdCarComQuant) {
    console.log("Esse produto já está no carrinho");
    incrementarQuantProd(idProduto);
    return;
  }
  idsProdCarComQuant[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdCarComQuant);
  desenharProdNoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for (const idProdutoCarrinho in idsProdCarComQuant) {
    precoTotalCarrinho +=
      catalogo.find((p) => p.id === idProdutoCarrinho).preco *
      idsProdCarComQuant[idProdutoCarrinho];
  }
  precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}
