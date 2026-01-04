// todo.js - Blueprint for a single todo item 

// Creates todo objects
export class Todo {
    constructor(title, description, dueDate, dueTime, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.completed = false;
        this.id = crypto.randomUUID();
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }
}