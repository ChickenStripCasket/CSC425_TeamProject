import './EditModal.css'
import Modal from './Modal'
import TextInput from './TitleTextInput'
import { useEffect, useState } from "react"
import { IconButton } from './material/IconButton'
import TextAreaInput from './modal/TextAreaInput'

export default function EditModal({
    editTask,
    onClose,
    onSubmit
}) {
    const [task, setTask] = useState('')

    const saveTask = () => {
        setTask({...task})
    }

    // load task
    useEffect(() => {
        setTask({...editTask})
    }, [editTask])

    return (
        <Modal visible={editTask} onClose={onClose}>
            <header className='modal-header-container'>
                <h3 className='title-large modal-header' >Edit Task</h3>
                <IconButton icon="delete"/>
                <IconButton icon="close" onClick={onClose}/>

            </header>
            <TextInput title='Title' placeHolder={'Enter a Title...'} value= {task?.title} onValueChanged={(value)=>{task.title = value; saveTask()}}></TextInput>
            <TextAreaInput title='Description' placeholder='Enter a description...' value={task?.description} onValueChanged={value => {task.description = value; saveTask()}} />
        </Modal>
    )
}