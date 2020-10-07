function addTarefa () {
    const tarefasUsuario = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana")
    const listaDeTarefas = document.getElementById(diaSemana)
    
   if (tarefasUsuario.value === "") {
       alert("Digite uma tarefa")
   } else {
       listaDeTarefas.innerHTML += `<li>${tarefasUsuario}</li>`
       tarefasUsuario.value = ""
   }
}