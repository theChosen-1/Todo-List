import * as app from './app.js';
import * as dom from './dom.js';
import './style.css';

// Wait for page to load
document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const addProjectBtn = document.getElementById('addProjectBtn');
    const addTodoBtn = document.getElementById('addTodoBtn');

    // Add event listeners
    addProjectBtn.addEventListener('click', () => {
        const projectName = prompt("Enter your Project Name:");
        if (projectName !== null) {
            app.createProject(projectName);
            dom.renderProject();
        }
        else { alert("You didnt enter your name") };
    });

    addTodoBtn.addEventListener('click', () => {
        const projectName = prompt("Enter the project's Name:")

        if (projectName !== null) {
            let project = app.getProjectByName(projectName);
            if (project) {
                const title = prompt("Enter Your Todo's title:")
                const description = prompt("Enter Your Todo's description:") 
                const dueDate = prompt("Enter Your Todo's dueDate:") 
                const dueTime = prompt("Enter Your Todo's dueTime:") 
                const priority = prompt("Enter Your Todo's priority:") 

                let newTodo = app.createTodo(title, description, dueDate, dueTime, priority);
                app.addTodo(project, newTodo);
                dom.renderTodos(project);
            }
            else { alert('this project doenst exist, please create the project first') }
        }
        else { alert('you didnt enter a name!') }
    })
});