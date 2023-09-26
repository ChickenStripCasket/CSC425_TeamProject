import './EditModal.css'
import Modal from './Modal'

export default function EditModal({
    editTask,
    onClose
}) {
    return (
        <Modal visible={editTask} onClose={onClose}>
            <header>

            </header>
        </Modal>
    )
}