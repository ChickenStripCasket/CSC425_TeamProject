import './TaskCardGrid.css'
import TaskCard from './TaskCard'
import { updateTask } from './api'

export default function TaskCardGrid(
    {
        tasks,
        onTaskEdit,
        onTasksChange
    }
) {
    return (
        <ol className='task-card-grid'>
            {/* Iterate the tasks list and generate TaskCard components */}
            {tasks.map((task, n) => {
                return (
                    <TaskCard key={n} task={task} onClick={event => {
                        if (event.defaultPrevented) return
                        event.preventDefault()
                        // call onTaskEdit if it exists.
                        if (onTaskEdit) onTaskEdit(task)
                    }} onTaskChange={newTask => {
                        // replace the old task with the new one
                        tasks[n] = newTask
                        // call api
                        updateTask(newTask)
                        // call onTasksChange
                        if (onTasksChange) onTasksChange(tasks)
                    }} />
                )
            })}
        </ol>
    )
}