import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='group ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    } border-solid w-48 m-2 flex flex-col justify-between p-2 shadow-xl shadow-slate-400 rounded-lg' id="card-produto-${
      produtoCatalogo.id
    }">
      <img 
          src="./docs/assets/images/${produtoCatalogo.nomeArquivoImagem}" 
          alt="Produto."
          class='group-hover:scale-110 duration-300 my-3 rounded-lg'
      />
      <p class='pl-2 text-sm'>${produtoCatalogo.marcaProduto}</p>
      <p class='pl-2 text-sm'>${produtoCatalogo.nomeProduto}</p>
      <p class='pl-2 text-sm'>R$ ${produtoCatalogo.preco}</p>
      <button id='adicionar-${
        produtoCatalogo.id
      }' class='bg-slate-950 text-slate-200 hover:bg-slate-800'>
      <i class="fa-solid fa-cart-plus"></i>
      </button>
      </div>`;
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    console.log("cartaoProduto" + produtoCatalogo.nomeProduto);
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
