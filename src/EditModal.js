import './EditModal.css';
import Modal from './Modal';
import TextInput from './TitleTextInput';
import { useEffect, useState } from "react";
import { IconButton } from './material/IconButton';
import TextAreaInput from './modal/TextAreaInput';
import { Icon } from './material/Icon.js';
import { FilledButton } from './material/FilledButton';

export default function EditModal({
    editTask,
    onClose,
    onSubmit,
    onDelete
}) {
    // Initialize task and tempDueDate with default values
    const [task, setTask] = useState(editTask || { title: '', description: '', dueDate: new Date() });
    const [tempDueDate, setTempDueDate] = useState(editTask?.dueDate || new Date());

    const saveTask = (toSave) => {
        setTask({ ...(toSave || task) });
    }

    useEffect(() => {
        saveTask(editTask);
        setTempDueDate(editTask?.dueDate || new Date());
    }, [editTask])

    const handleDueDateChange = (date) => {
        setTempDueDate(date);
    };

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
                value={tempDueDate?.toISOString()?.slice(0, -5)}
                onChange={(e) => handleDueDateChange(new Date(e.target.value))}
            />

            <FilledButton className='modal-submit' label='Save' onClick={() => { onClose(); onSubmit(task); }} />
        </Modal>
    )
}