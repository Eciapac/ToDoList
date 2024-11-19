import { useContext, useState } from "react"
import { v4 } from 'uuid';
import { TodoContext } from "../../context/context";
const Modal = ({isEdit, editNote}) => {
    const {t, closeModalHandler:closeModal, addOrChangeNoteHandler:addOrChangeNote} = useContext(TodoContext)
    const [title, setTitle] = useState('')
    const [text, setText]   = useState('')
    
    const addOrChange = () => {
        const note = {
            id: editNote?.id ?? v4(),
            title: title,
            text: text,
            date: new Date().toLocaleDateString()
        }
        addOrChangeNote(note)
        closeModal()
    }
  return (
    <div className="modal" onClick={() => closeModal()}>
        <div className="modal__block" onClick={(e) => e.stopPropagation()}>
            <h2>{isEdit ? t('modalTitleAdd') : t('modalTitleEdit')}</h2>
            <div className="modal__block-inputs">
                <label>
                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    <span>Title</span>
                </label>
                <label>
                    <input type="text" placeholder="Content" onChange={(e) =>  setText(e.target.value)}  />
                    <span>Content</span>
                </label>
            </div>
            <div className="modal__block-btns">
                <button className="red" onClick={() => closeModal()}>{t('modalCancel')}</button>
                {!isEdit && <button className="purple" onClick={() => addOrChange()}>{t('modalAdd')}</button>}
                {isEdit && <button className="purple"  onClick={() => addOrChange()}>{t('modalEdit')}</button>}
            </div>
        </div>
    </div>
  )
}

export default Modal