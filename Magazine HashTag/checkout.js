import { desenharProdCarrinhoSimples, lerLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout() {
  const idsProdCarComQuant = lerLocalStorage("carrinho") ?? {};

  for (const idProduto in idsProdCarComQuant) {
    desenharProdCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdCarComQuant[idProduto]
    );
  }
}

function finalizarCompra(evento) {
  evento.preventDefault();
  const idsProdCarComQuant = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdCarComQuant).length === 0) {
    return;
  }
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdCarComQuant
  }
  window.location.href = window.location.origin + "/pedidos.html";
}

desenharProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));
