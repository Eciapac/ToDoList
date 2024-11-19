import NotesItem from "./NotesItem"
import list from "../../assets/images/list.svg"
import grid from "../../assets/images/grid.svg"
import { useContext, useState } from "react"
import clsx from 'clsx'
import { TodoContext } from "../../context/context"
const Notes = ({ notes }) => {
  const { t, searchValue } = useContext(TodoContext)
  const [view, setView] = useState(true)
  
  const noteListClass = clsx("notes__content", { active: !view })
  return (
    <main className="main container">
        <section className="notes">
            <div className="notes__top">
              {!searchValue && notes.length > 0 && <h2>{t('allNotes')}</h2>}
              {notes.length===0 && !searchValue && <h2>{t('noNotes')}</h2>}
              {searchValue && notes.length > 0 && <h2>{t('Poisk')}</h2>}
              {notes.length===0 && searchValue.length > 0 && <h2>{t('notFound')}</h2>}
              <button onClick={() => setView(!view)}>
                  <img src={view ? list : grid} alt="" />
                  {view ? t('list') : t('grid')}
              </button>
            </div>
            <div className={noteListClass}>
                { notes.map((note, idx) => (
                <NotesItem 
                    key={idx}
                    note={note}
                  />)
                ) }
            </div>
        </section>
    </main>
  )
}

export default Notes