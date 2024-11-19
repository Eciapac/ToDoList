import { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Notes from "./components/Notes/Notes"
import Modal from "./components/Modal/Modal"
import edit from "./assets/images/edit.svg"
import { TodoContext } from "./context/context"
import { useTranslation } from 'react-i18next'


function App() {
  const getLs = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const setLs = () => localStorage.notes = JSON.stringify(notes)
  const [notes, setNotes] = useState(getLs)
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    setLs()
  }, [notes])
  const filteredNotes = notes.filter(note => note.title.includes(searchValue))
  const setSearchingValue = (val)=> {
    setSearchValue(val)
  }
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModalHandler = () => {
    setIsModalOpen(true)
    setIsEdit(false)
    setEditNote(null)
  }
  const closeModalHandler = () => {
    setIsModalOpen(false)
  }
  
  const deleteNoteHandler = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  const [isEdit, setIsEdit] = useState(false)
  const [editNote, setEditNote] = useState(null)
  const addOrChangeNoteHandler = (note) => {
    if(editNote?.id){
      const updatedNotes = notes.map(item => {
        if(item.id === note.id){
          return note
        }
        return item
      })
      setNotes(updatedNotes)
    }else{
      setNotes([...notes, note])
    }
  }
  const changeNoteHandler = (note) => {
    setEditNote(note)
    setIsEdit(true)
    setIsModalOpen(true)
  }
  const { t } = useTranslation()
  return (
  <TodoContext.Provider 
    value={{
      searchValue,
      setSearchingValue,
      changeNoteHandler,
      deleteNoteHandler,
      closeModalHandler,
      addOrChangeNoteHandler,
      t
    }}
  >
      <Navbar />
      <Notes notes={filteredNotes} />
      {isModalOpen && <Modal isEdit={isEdit} editNote={editNote} />}
      <button 
        className="add"
        onClick={() => openModalHandler()}>
      <img src={edit} alt="" />
      </button>
    </TodoContext.Provider>
  )
}

export default App