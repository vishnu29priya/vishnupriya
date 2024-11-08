// src/script.js

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add');
    const inputField = document.getElementById('input');
    const todoList = document.getElementById('todolist');

    addButton.addEventListener('click', () => {
        addTodo();
    });

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = inputField.value.trim();
        if (todoText === '') return;

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');

        const todoTextElement = document.createElement('span');
        todoTextElement.classList.add('todo-text');
        todoTextElement.textContent = todoText;

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editTodo(todoContainer, todoTextElement);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTodo(todoContainer);
        });

        todoContainer.appendChild(todoTextElement);
        todoContainer.appendChild(editButton);
        todoContainer.appendChild(deleteButton);
        todoList.appendChild(todoContainer);

        inputField.value = '';
        inputField.focus();
    }

    function editTodo(todoContainer, todoTextElement) {
        const currentText = todoTextElement.textContent;
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = currentText;
        editInput.classList.add('todo-input');
        
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('button');
        saveButton.addEventListener('click', () => {
            const newText = editInput.value.trim();
            if (newText !== '') {
                todoTextElement.textContent = newText;
                todoContainer.replaceChild(todoTextElement, editInput);
                todoContainer.replaceChild(editButton, saveButton);
            }
        });

        todoContainer.replaceChild(editInput, todoTextElement);
        todoContainer.replaceChild(saveButton, editButton);
    }

    function deleteTodo(todoContainer) {
        todoList.removeChild(todoContainer);
    }
});
