import './TaskCard.css'
import DateFormatter from './formatters/DateFormatter'
import { IconButton } from './material/IconButton'

export default function TaskCard(
    {
        key,
        task,
        onClick,
        onTaskChange
    }
) {
    return (
        <li key={key}><article onClick={onClick} className='task-card'>
            <ul className='headline'>
                <section className='title-container'>
                    {/* title */}
                    <h3 className='title-large'>{task.title}</h3>

                    {/* due date */}
                    <h5 className='title-small'>Due <DateFormatter date={task.dueDate} compact /></h5>
                </section>

                {/* completed checkbox */}
                <IconButton iconFilled icon={task.completed ? 'check_box' : 'check_box_outline_blank'} className='check-box' onClick={event => {
                    event.preventDefault()
                    // make sure that the onTaskChange function exists
                    if (onTaskChange) {
                        task.completed = !task.completed // invert task.completed
                        onTaskChange(task) // call on task change with the updated task
                    }
                }} />
            </ul>
            <div className='body-large description'>{task.description}</div>
        </article></li>
    )
}