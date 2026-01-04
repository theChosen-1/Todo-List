import * as app from './app.js';
/* dom.js - The "display" (renders UI & handles clicks) */

export function renderProject() {
    const projectList = document.getElementById('projectList');
    const projects = app.getAllProjects();
    projectList.innerHTML = '';

    projects.forEach(project => {
    // appends each project to their own div 
        const projectDiv = document.createElement('div');
        projectDiv.textContent = project.name;
         // Add listener for viewing any project when clicked
        projectDiv.addEventListener('click', () => {
            renderTodos(project);
        });
        projectList.appendChild(projectDiv);
    });  
}

export function renderTodos(project) {
    const todoList = document.getElementById('todoList');
    const todos = app.getCurrentProjectTodos(project);
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todoItem';
        // toggle todo 
        if (todo.completed) {
            todoItem.classList.add('completed');
        }

        // Checkbox circle
        const checkbox = document.createElement('div');
        checkbox.className = 'todoCheckbox';
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            app.toggleTodo(todo);
            renderTodos(project);
        });

        // Todo content wrapper
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'todoContentWrapper';

        // Todo title
        const title = document.createElement('div');
        title.className = 'todoTitle';
        title.textContent = todo.title;

        // Todo details (hidden by default)
        const details = document.createElement('div');
        details.className = 'todo-details';
        details.innerHTML = `
            <div class="detail-row"><strong>Description:</strong> ${todo.description || 'No description'}</div>
            <div class="detail-row"><strong>Due Date:</strong> ${todo.dueDate || 'Not set'}</div>
            <div class="detail-row"><strong>Due Time:</strong> ${todo.dueTime || 'Not set'}</div>
            <div class="detail-row"><strong>Priority:</strong> ${todo.priority || 'None'}</div>
        `;

        // Click to toggle expansion
        contentWrapper.addEventListener('click', () => {
            todoItem.classList.toggle('expanded');
        });

        contentWrapper.appendChild(title);
        contentWrapper.appendChild(details);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(contentWrapper);
        todoList.appendChild(todoItem);
    });
}