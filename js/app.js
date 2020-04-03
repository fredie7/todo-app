'use strict'
const input = document.querySelector('input')
const listItem = document.querySelector('li')
const btn = document.querySelector('.btn')
const notification = document.querySelector('.notify')
const list = document.querySelector('.collection')
const clearTodos = document.querySelector('.clear')
const form = document.querySelector('form')
form.addEventListener('submit', addToDo)

function addToDo(e) {
    if (input.value === '') {
        notification.textContent = 'enter a to-do item'
        notification.style.backgroundColor = 'red'
        setTimeout(() => {
            notification.textContent = ''
            notification.style.backgroundColor = ''
        }, 1500);
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(input.value))
        li.style.background = 'grey'
        li.classList.add('sec')
        const link = document.createElement('a')
        link.className = 'delete-item'
        link.innerHTML = `<button>Delete</button>`
        
        const updateLink = document.createElement('a')
        updateLink.className = 'update-item'
        updateLink.innerHTML = `<button>Update</button>`
        
        li.appendChild(link)
        li.appendChild(updateLink)
        list.appendChild(li)
        console.log(li)
        input.value = ''
            
    }
    e.preventDefault()
}

list.addEventListener('click', removeItem)
function removeItem(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        const deleteItem = e.target
        if (deleteItem) {
            e.target.parentElement.parentElement.remove()
        }
    }
}

list.addEventListener('click', updateItem)
function updateItem(e) {
    if (e.target.parentElement.classList.contains('update-item')) {
        const updateItem = e.target
        if (updateItem) {
            e.target.parentElement.parentElement.remove()
            input.value = e.target.parentElement.parentElement.firstChild.textContent
        }
    }
}

clearTodos.addEventListener('click', deleteAll)
function deleteAll() {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}