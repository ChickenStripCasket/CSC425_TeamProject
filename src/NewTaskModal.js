import './EditModal.css'
import Modal from './Modal'
import TextInput from './TitleTextInput'
import { useEffect, useState } from "react"
import { IconButton } from './material/IconButton'
import TextAreaInput from './modal/TextAreaInput'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from './material/Icon.js';
import { FilledButton } from './material/FilledButton'

export default function NewTaskModal({
    onClose,
    onSubmit,
    visible
}) {
    // use the state of the edit modal
    const [task, setTask] = useState( {
        "id": 0,
        "title": "",
        "dueDate": new Date(),
        "completed": false,
        "description": ""
      });
    const [showDatePicker, setShowDatePicker] = useState(false);

    const saveTask = (toSave) => {
        // when saving the task, we have to put all of the contents of task
        // into a new object, because otherwise React will think it's the
        // same object and not update the UI.
        // This is because React only checks object by reference, not by their contents.
        setTask({ ...(toSave || task) })
    }

    const handleDueDateChange = (date) => {
        task.dueDate = date
        saveTask();
    };

    return (
        <Modal visible={visible} onClose={onClose}>
            {/* Header */}
            <header className='modal-header-container'>
                <h3 className='display-small modal-header' >New Task</h3>
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
 
                <div className="due-date-row">
                    <div className="due-date-label">Due Date:</div>
                    <div className="due-date-value">{task.dueDate.toLocaleString()}</div>
                     <button
                         className="date-picker-icon-button"
                         onClick={() => setShowDatePicker(!showDatePicker)}
                    >
                    <Icon icon="calendar_month" className="calendar" />

                     </button>
                {showDatePicker && (
                    <DatePicker
                        selected={task.dueDate}
                        onChange={handleDueDateChange}
                        showTimeSelect
                        timeFormat='h:mm aa'
                        dateFormat='MMMM d, yyyy h:mm '
                    />
                )}
            </div>

            {/* Submit button */}
            <FilledButton className='modal-submit' label='Save' onClick={() => {onClose(); onSubmit(task)}}/>
        </Modal>
    )
}