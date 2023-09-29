import './EditModal.css'
import Modal from './Modal'
import TextInput from './TitleTextInput'
import { useEffect, useState } from "react"
import { IconButton } from './material/IconButton'
import TextAreaInput from './modal/TextAreaInput'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditModal({
    editTask,
    onClose,
    onSubmit,
    onDelete
}) {
    // use the state of the edit modal
    const [task, setTask] = useState(editTask || { title: '', description: '', dueDate: new Date() });

    const saveTask = (toSave) => {
        // when saving the task, we have to put all of the contents of task
        // into a new object, because otherwise React will think it's the
        // same object and not update the UI.
        // This is because React only checks object by reference, not by their contents.
        setTask({ ...(toSave || task) })
    }

    // load task when the component is mounted
    useEffect(() => {
        // set the task to the current edit task
        saveTask(editTask)
    }, [editTask])

    const handleDueDateChange = (date) => {
        task.dueDate = date
        saveTask();
    };

    return (
        <Modal visible={editTask} onClose={onClose}>
            {/* Header */}
            <header className='modal-header-container'>
                <h3 className='title-large modal-header' >Edit Task</h3>
                <IconButton icon="delete" onClick={() => {onClose(); onDelete()}}/>
                <IconButton icon="close" onClick={onClose} />

            </header>

            {/* Title Text Input */}
            <TextInput
                title='Title'
                placeHolder={'Enter a Title...'}
                value={task?.title}
                onValueChanged={
                    (value) => {
                        task.title = value
                        saveTask()
                    }
                }
            />

            {/* Description TextArea Input */}
            <TextAreaInput
                title='Description'
                placeholder='Enter a description...'
                value={task?.description}
                onValueChanged={
                    value => {
                        task.description = value
                        saveTask()
                    }
                }
            />


            <div className="due-date-picker">
                <label>Due Date:</label>
                <DatePicker 
                selected={task.dueDate}
                onChange={handleDueDateChange}
                showTimeSelect
                timeFormat='h:mm aa'
                dateFormat='MMMM d, yyyy h:mm '
                />
            </div>
            
        </Modal>
    )
}