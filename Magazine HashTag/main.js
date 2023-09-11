import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdCar,
} from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdCar();
atualizarPrecoCarrinho();
inicializarFiltros();
