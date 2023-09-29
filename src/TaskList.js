import './TaskList.css'
import TaskListComponent from './TaskListComponent'

export default function TaskList(
    {
        tasks,
        onTaskEdit,
        onTasksChange
    }
)
{
    return (
        <ul className = "list-element-list">
            {tasks.map((task, n) => {
                return (
                    <TaskListComponent key={n} task={task} onClick={event => {
                        if (event.defaultPrevented) return
                        event.preventDefault()

                        if(onTaskEdit) onTaskEdit(task)
                    }} onTaskChange={newTask => {
                        tasks[n] = newTask
                    
                        if (onTasksChange) onTasksChange(tasks)
                    }}/>
                )
            })}
        </ul>
    );
}