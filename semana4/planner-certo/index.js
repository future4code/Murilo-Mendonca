contagem = 0

function addTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    const diaDaSemana = document.getElementById("dias-semana").value
    const novaTarefa = document.getElementById(diaDaSemana)

    contagem++
    let riscarTarefa = `apagar-${contagem}`

    if (inputTarefa.value !== ""){
        novaTarefa.innerHTML += `<li id=${riscarTarefa} onclick="itemClique(id)">${inputTarefa.value}</li>`
        inputTarefa.value = ""         
    } else {
        alert("Digite uma tarefa!") 
    }
}

function itemClique (id) {
    document.getElementById(id).style.textDecoration = "line-through"
}

function removerTarefas () {
    const inputTarefa = document.getElementById("tarefa")
    const diaDaSemana = document.getElementById("dias-semana").value
    const novaTarefa = document.getElementById(diaDaSemana)

    novaTarefa.innerHTML = ""
    inputTarefa.value

}