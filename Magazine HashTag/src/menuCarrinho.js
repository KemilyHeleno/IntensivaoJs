import { catalogo } from "./utilidades";

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

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg relative">
  <button id="excluir-produto" class="absolute top-0 right-2">
    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
  </button>
  <img
    src="./assets/images/${produto.nomeArquivoImagem}"
    alt="Carrinho: ${produto.nomeProduto}"
    class="h-24 rounded-lg"
  />
  <div class="py-2">
    <p class="text-slate-900  pl-2 text-sm">${produto.nomeProduto}</p>
    <p class="text-slate-600  pl-2 text-xs">Tamanho: M</p>
    <p class="text-green-700  pl-2 text-sm">R$ ${produto.preco}</p>
  </div>
</article>`;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}
