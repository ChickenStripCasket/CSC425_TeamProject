import './EditModal.css'
import Modal from './Modal'
import TextInput from './TitleTextInput'
import { useState } from "react"
import { IconButton } from './material/IconButton'

export default function EditModal({
    editTask,
    onClose
}) {
    const [inputValue, setInputValue] = useState(editTask?.title)

    return (
        <Modal visible={editTask} onClose={onClose}>
            <header className='modal-header-container'>
                <h3 className='title-large modal-header' >Edit Task</h3>
                <IconButton icon="delete"/>
                <IconButton icon="close" onClick={onClose}/>

            </header>
            <TextInput title='Title' placeHolder={'Enter a Title...'} value= {inputValue} onValueChanged={(value)=>{setInputValue(value)}}></TextInput>
        </Modal>
    )
}