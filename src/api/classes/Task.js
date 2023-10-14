export default class Task {
    
    /**
     * Creates a Task with the provided properties.
     * 
     * @param {number} id The tasks's ID.
     * @param {string} title The title of the task.
     * @param {string} description The task's description.
     * @param {Date} dueDate WHen the task is due.
     * @param {boolean} completed If the task is completed.
     */
    constructor(
        id,
        title,
        description,
        dueDate,
        completed
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.completed = completed
    }

}