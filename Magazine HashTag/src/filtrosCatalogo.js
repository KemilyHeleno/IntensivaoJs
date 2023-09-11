const catalogosProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogosProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderMasculino() {
  exibirTodos();
  const produtosMasculinos = Array.from(
    catalogosProdutos.getElementsByClassName("masculino")
  );

  for (const produto of produtosMasculinos) {
    produto.classList.add("hidden");
  }
}

function esconderFeminino() {
  exibirTodos();
  const produtosMasculinos = Array.from(
    catalogosProdutos.getElementsByClassName("feminino")
  );

  for (const produto of produtosMasculinos) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-femininos")
    .addEventListener("click", esconderMasculino);
  document
    .getElementById("exibir-masculinos")
    .addEventListener("click", esconderFeminino);
}
