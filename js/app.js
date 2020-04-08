'use strict'

class Todo {
    constructor(nextTodo) {
        this.nextTodo = nextTodo
    }
}

class UI {
    showAlert() {
        const div = document.createElement('div')
        div.className = 'error'
        div.appendChild(document.createTextNode('enter you next todo'))
        const notification = document.querySelector('.notify')
        notification.appendChild(div)
        setTimeout(() => {
            notification.remove()
        }, 1500);
        document.querySelector('.collection').firstChild.textContent = ''
    }

    addNextTodo(todo) {
        const collection = document.querySelector('.collection')
        const li = document.createElement('li')
        li.classList.add('list-item')
        const p = document.createElement('p')
        p.appendChild(document.createTextNode(todo.nextTodo))
        const div = document.createElement('div')
        div.className = 'list-btn'
        const btnUpdate = document.createElement('button')
        const btnDelete = document.createElement('button')
        btnUpdate.appendChild(document.createTextNode('update'))
        btnUpdate.className = 'update-btn'
        btnDelete.appendChild(document.createTextNode('delete'))
        btnDelete.className = 'delete-btn'
        div.appendChild(btnUpdate)
        div.insertAdjacentElement("beforeend",btnDelete)
        li.appendChild(p)
        li.insertAdjacentElement("beforeend",div)
        collection.appendChild(li)
        document.querySelector('input').value = ''
    }

   
}

const updateTodo = e => {
    if (e.target.classList.contains('update-btn')) {
        e.target.parentElement.parentElement.remove()
        const input = e.target.parentElement.previousElementSibling.textContent
        document.querySelector('input').value = input
    }
}

const deleteTodo = e=> {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.remove()
    }
}

const clearTodos = ()=> {
    const collection = document.querySelector('.collection')
    while (collection.firstChild) {
        collection.removeChild(collection.firstChild)
    }
}
document.querySelector('.collection').addEventListener('click', updateTodo)
document.querySelector('.collection').addEventListener('click', deleteTodo)
document.querySelector('.clear').addEventListener('click', clearTodos)

    
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const nextTodo = document.querySelector('input').value
    const todo = new Todo(nextTodo)
    const ui = new UI()
    if (nextTodo === '') {
        ui.showAlert()
    }
    ui.addNextTodo(todo)
})