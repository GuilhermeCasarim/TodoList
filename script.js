//o pesquisar e filtrar ainda nao foi implementado; o botao de editar nao funciona a partir da primeira tarefa, alguma hora vai ser mudado
const tarefa = document.querySelector('#tarefa')
const listaTasks = document.querySelector('.tasks')
const task = document.querySelector('.task')
const botaoAdd = document.querySelector('#btn-add')
const addTask = document.querySelector('.adicionar')
const editForm = document.querySelector('.edit-form')
const doneEdit = document.querySelector('.done-edit')
let oldInput;



botaoAdd.addEventListener('click', (e) => {
    e.preventDefault()
    let textoTarefa = tarefa.value
    if(textoTarefa){
        valida(textoTarefa)
    }
    tarefa.value = ''
   
})

function valida(textoTarefa){
        let task = document.createElement('div')
        task.classList.add('task')
        let titulo = document.createElement('h3') //criando titulo
        titulo.innerText = textoTarefa
        task.appendChild(titulo) //colocando titulo na task
       
        let botaoDone = document.createElement('button')
        botaoDone.innerHTML = '<i class="fa-solid fa-check"></i>'
        botaoDone.classList.add('done', 'btn', 'btn-outline-light')
        task.appendChild(botaoDone)
    
        let botaoEdit = document.createElement('button')
        botaoEdit.innerHTML = '<i class="fa-solid fa-pen"></i>'
        botaoEdit.classList.add('edit', 'btn', 'btn-outline-light')
        task.appendChild(botaoEdit)
    
        let botaoRemove = document.createElement('button')
        botaoRemove.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        botaoRemove.classList.add('remove', 'btn', 'btn-outline-light')
        task.appendChild(botaoRemove)
    
        listaTasks.appendChild(task) //colocando a task na lista das tasks
}

document.addEventListener('click', (e) => {
    e.preventDefault()
    const target = e.target
    const divTask = target.closest('div')
    if(target.classList.contains('done')){
        divTask.classList.toggle('ready')
    }

    if(target.classList.contains('edit')){
        hideToggle()
        oldInput = divTask.querySelector('h3').innerText;
    }

    if(target.classList.contains('remove')){
        divTask.remove()
    }

})

const hideToggle = () => {
    editForm.classList.toggle('hide')
    addTask.classList.toggle('hide')
    listaTasks.classList.toggle('hide') 
}

doneEdit.addEventListener('click', (e) => {
    //oldinput = texto atual antes de editar
    e.preventDefault()
    const inputEdit = document.querySelector('#input-edit')
    //texto = novo titulo
    let texto = inputEdit.value
    editTodo(texto)
    hideToggle()
})

function editTodo(texto){
    let listaTasksAll = document.querySelectorAll('.tasks')
    
    listaTasksAll.forEach((el) => {
        let titulo = el.querySelector('h3')
        if(titulo.innerText == oldInput){
            titulo.innerText = texto;
        }
    }) 
}



