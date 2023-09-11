import { atualizarPrecoCarrinho } from "./src/menuCarrinho";
import {
  apagarDoLocalStorage,
  desenharProdCarrinhoSimples,
  lerLocalStorage,
  salvarLocalStorage,
} from "./src/utilidades";

function desenharProdutosCheckout() {
  const idsProdCarComQuant = lerLocalStorage("carrinho") ?? {};
  for (const idProduto in idsProdCarComQuant) {
    desenharProdCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdCarComQuant[idProduto]
    );
  }
}//

function finalizarCompra(evento) {
  evento.preventDefault();
  const idsProdCarComQuant = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdCarComQuant).length === 0) {
    return;
  }
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdCarComQuant,
  };

  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoDePedidosAtualizado);
  apagarDoLocalStorage("carrinho");

  window.location.href = "/pedidos.html";
}

desenharProdutosCheckout();
atualizarPrecoCarrinho();


document.addEventListener("submit", (evt) => finalizarCompra(evt));
