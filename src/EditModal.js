import './EditModal.css';
import Modal from './Modal';
import TextInput from './TitleTextInput';
import { useEffect, useState } from "react";
import { IconButton } from './material/IconButton';
import TextAreaInput from './modal/TextAreaInput';
import { FilledButton } from './material/FilledButton';
import DateTimeInput from './modal/DateTimeInput';

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
                    task.title = value
                    saveTask();
                }}
            />

            {/* Description TextArea Input */}
            <TextAreaInput
                title='Description'
                placeholder='Enter a description...'
                value={task?.description}
                onValueChanged={(value) => {
                    task.description = value
                    saveTask();
                }}
            />

            <DateTimeInput
                title='Due Date'
                value={task?.dueDate || new Date()}
                onValueChanged={newValue => {
                    task.dueDate = newValue
                    saveTask()
                }}
            />
               
             <FilledButton className='modal-submit' label='Save' onClick={() => {onClose(); onSubmit(task)}}/>
        </Modal>
    )
}