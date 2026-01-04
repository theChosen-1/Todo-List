// project.js - Blueprint for projects (Work, Family, Hobbies)

// Creates project objects
export class Project {
    constructor(name) {
        this.name = name;
        this.todoList = [];
    }

    addTodo(todo) {
        this.todoList.push(todo);
    }

    removeTodo(todo) {
        const index = this.todoList.findIndex(t => t.id === todo.id);
        if (index !== -1) {
            this.todoList.splice(index, 1);
        }
    }
}