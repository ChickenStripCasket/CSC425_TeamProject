import './EditModal.css'

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