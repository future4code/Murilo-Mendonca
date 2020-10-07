let criarPost = () => {
  let inputTitulo = document.getElementById("titulo-post");
  let inputAutor = document.getElementById("autor-post");
  let inputConteudo = document.getElementById("conteudo-post");
  let imprimirNoHtml = document.getElementById("container-de-posts");

  let conteudoUsuario = {
    titulo: inputTitulo.value,
    autor: inputAutor.value,
    conteudo: inputConteudo.value,
  };

  imprimirNoHtml.innerHTML += `<br> ${inputTitulo.value} <br> ${inputAutor.value} <br> ${inputConteudo.value}`;

  inputTitulo.value = "";
  inputAutor.value = "";
  inputConteudo.value = "";
};
