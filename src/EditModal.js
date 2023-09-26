 import './EditModal.css'
import Modal from './Modal'
import TextInput from './TitleTextInput'
import { useState } from "react"

export default function EditModal({
    editTask,
    onClose
}) {

    const [inputValue, setInputValue] = useState(editTask?.title)

    return (
        <Modal visible={editTask} onClose={onClose}>
            <header>

            </header>
            <TextInput title='Title' placeHolder={'Enter a Title...'} value= {inputValue} onValueChanged={(value)=>{setInputValue(value)}}></TextInput>
        </Modal>
    )
}