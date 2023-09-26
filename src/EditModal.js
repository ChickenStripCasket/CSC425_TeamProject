import './EditModal.css'
import Modal from './Modal'
import { IconButton } from './material/IconButton'

export default function EditModal({
    editTask,
    onClose
}) {
    return (
        <Modal visible={editTask} onClose={onClose}>
            <header className='modal-header-container'>
                <h3 className='title-large modal-header' >Edit Task</h3>
                <IconButton icon="delete"/>
                <IconButton icon="close" onClick={onClose}/>

            </header>
        </Modal>
    )
}