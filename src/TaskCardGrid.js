import './TaskCardGrid.css'
import TaskCard from './TaskCard'

export default function TaskCardGrid(
    {
        tasks,
        onTasksChange
    }
) {
    return (
        <ol className='task-card-grid'>
            {/* Iterate the tasks list and generate TaskCard components */}
            {tasks.map((task, n) => {
                return (
                    <TaskCard key={n} task={task} onTaskChange={newTask => {
                        // replace the old task with the new one
                        tasks[n] = newTask
                        // call onTasksChange
                        if (onTasksChange) onTasksChange(tasks)
                    }}/>
                )
            })}
        </ol>
    )
}