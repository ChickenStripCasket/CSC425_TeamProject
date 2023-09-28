import './TaskListComponent.css'
import DateFormatter from './formatters/DateFormatter'
import { IconButton } from './material/IconButton'

export default function TaskListComponent (
    {
        key,
        task,
        onClick,
        onTaskChange
    }
)
{
    return (
        <li key = {key}><article onClick={onClick} className = 'list-element'>
            <ul className = 'headline'>
                <section className = 'title-container'>
                    {/* Title */}
                    <h3 className ='title-large'>{task.title}</h3>
                    {/* Due Date */}
                    <h5 className='title-small'>Due <DateFormatter date={task.dueDate} compact /></h5>
                </section>

                {/* Checkbox */}
                <IconButton iconFilled icon={task.completed ? 'check_box' : 'check_box_outline_blank'} className='check-box' onClick={event => {
                        event.preventDefault()
                        // make sure that the onTaskChange function exists
                        if (onTaskChange) {
                            task.completed = !task.completed // invert task.completed
                            onTaskChange(task) // call on task change with the updated task
                        }
                    }} />
            </ul>
        </article></li>
    );
}