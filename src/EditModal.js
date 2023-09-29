import './EditModal.css';
import Modal from './Modal';
import TextInput from './TitleTextInput';
import { useEffect, useState } from "react";
import { IconButton } from './material/IconButton';
import TextAreaInput from './modal/TextAreaInput';
import { Icon } from './material/Icon.js';
import { FilledButton } from './material/FilledButton';

function formatDate(date){
    // Create a JavaScript Date object

    // Get the components (year, month, day, hour, minute) from the Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Create a string in the 'YYYY-MM-DDTHH:mm' format
    return `${year}-${month}-${day}T${hours}:${minutes}`;

    // Set the value of an input with type datetime-local
}
export default function EditModal({
    editTask,
    onClose,
    onSubmit,
    onDelete
}) {
    // use the state of the edit modal
    const [task, setTask] = useState(editTask);

    const saveTask = (toSave) => {
        setTask({ ...(toSave || task) });
    }

    useEffect(() => {
        saveTask(editTask);
    }, [editTask])


    return (
        <Modal visible={editTask} onClose={onClose}>
            {/* Header */}
            <header className='modal-header-container'>
                <h3 className='display-small modal-header' >Edit Task</h3>
                <IconButton icon="delete" onClick={() => { onClose(); onDelete(); }} />
                <IconButton icon="close" onClick={onClose} />
            </header>

            {/* Title Text Input */}
            <TextInput
                title='Title'
                placeHolder={'Enter a Title...'}
                value={task?.title}
                onValueChanged={(value) => {
                    const updatedTask = { ...task, title: value };
                    saveTask(updatedTask);
                }}
            />

            {/* Description TextArea Input */}
            <TextAreaInput
                title='Description'
                placeholder='Enter a description...'
                value={task?.description}
                onValueChanged={(value) => {
                    const updatedTask = { ...task, description: value };
                    saveTask(updatedTask);
                }}
            />

             <input
                type="datetime-local"
                value={formatDate(task?.dueDate || new Date())} // Format the date to ISO string without seconds and timezone
                onChange={(e) => {
                    task.dueDate = new Date(e.target.value)
                    saveTask()
                }}
            />
               
             <FilledButton className='modal-submit' label='Save' onClick={() => {onClose(); onSubmit(task)}}/>
        </Modal>
    )
}