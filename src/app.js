// app.js - The "brain" (manages all data) 

// make new projects and todo's and manage them
import { Todo } from './todo.js';
import { Project } from './project.js';

let projects = [];

// Project Functions: 
export function createProject(name) {
    let newProject = new Project(name);
    projects.push(newProject);
    return newProject
}

export function deleteCurrentProject(project) {
    if (projects.includes(project)) {
        let index = projects.indexOf(project);
        projects.splice(index, 1);
    }
}

export function getAllProjects() {
    return projects;
}

export function getProjectByName(name) {
    return projects.find(p => p.name === name);
}

export function projectPresent(project) {
    if (projects.includes(project)) {
        return true
    }
    else { return false }
}

export function getCurrentProjectTodos(project) {
    if (projects.includes(project)) {
        return project.todoList;
    }
}

// Todo Functions:
export function createTodo(title, description, dueDate, dueTime, priority) {
    let newTodo = new Todo(title, description, dueDate, dueTime, priority);
    return newTodo
}

export function deleteTodo(project, todo) {
    if (projects.includes(project)) {
        project.removeTodo(todo);
    }
}

export function addTodo(project, todo) {
    if (projects.includes(project)) {
        project.addTodo(todo);
    }
}

export function toggleTodo(todo) {
    todo.toggleCompleted();
} 