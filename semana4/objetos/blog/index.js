let criarPost = () => {
  let inputTitulo = document.getElementById("titulo-post");
  let inputAutor = document.getElementById("autor-post");
  let inputConteudo = document.getElementById("conteudo-post");
  let imprimirNoHtml = document.getElementById("container-de-posts");
  let imgPost = document.getElementById("imagem-post");

  let conteudoUsuario = {
    titulo: inputTitulo.value,
    autor: inputAutor.value,
    conteudo: inputConteudo.value,
    imagem: imgPost.value,
  };

  if (imgPost.value.includes("http")) {
    imprimirNoHtml.innerHTML += `<img class="img" src=${imgPost.value}>`;
  } else {
    window.alert("Envie um link válido.");
  }

  imprimirNoHtml.innerHTML += `<br> ${inputTitulo.value} <br> ${inputAutor.value} <br> ${inputConteudo.value}`;

  inputTitulo.value = "";
  inputAutor.value = "";
  inputConteudo.value = "";
  imgPost.value = "";

  let arrayDeObejos = [conteudoUsuario];
  console.log(arrayDeObejos);
};
