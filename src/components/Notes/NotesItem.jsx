import edit from "../../assets/images/edit.svg"
import del from "../../assets/images/del.svg"
import { TodoContext } from "../../context/context"
import { useContext } from "react"
const NotesItem = ({note}) => {
  const {t, changeNoteHandler:changeNote, deleteNoteHandler:deleteNote} = useContext(TodoContext)
  return (
    <div className="notes__content-item">
      <h3>{note.title}</h3>
      <span>{note.date}</span>
      <p>{note.text}</p>
      <div>
        <button className="purple" onClick={() => changeNote(note)}><img src={edit} alt="" />{t('edit')}</button>
        <button className="red" onClick={() => deleteNote(note.id)}><img src={del} alt="" />{t('del')}</button>
      </div>
    </div>
  )
}

export default NotesItem