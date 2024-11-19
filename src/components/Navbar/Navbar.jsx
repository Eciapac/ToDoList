import search from './../../assets/images/icon.svg'
import back from './../../assets/images/back.svg'
import reset from './../../assets/images/reset.svg'
import { useContext, useEffect, useState } from 'react'
import i18next from 'i18next'
import { TodoContext } from '../../context/context'

const Navbar = () => {
  const { setSearchingValue:setSearching, t } = useContext(TodoContext)
 
  const [text, setText] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const resetSearch = () => {
    setShowSearch(false)
    setText('')
  }
  
  useEffect(() => {
    setSearching(text)
  }, [text])
  
  const [lang, setLang] = useState(false)
  const changeLang = () => {
    setLang(!lang)
    if(!lang) i18next.changeLanguage('uz')
    else i18next.changeLanguage('ru') 
  }
  return (
    <>
      { !showSearch ? (
        <header className='header'>
          <button onClick={() => changeLang()}>{!lang ? 'RU' : 'UZ'}</button>
          <h1>{t('Zametki')}</h1>
          <button onClick={() => setShowSearch(true)}><img src={search} alt="" /></button>
      </header>
      ) : (
        <header className='header'>
          <button onClick={() => resetSearch()}><img src={back} alt=""/></button>
          <input type='text' placeholder={t('Poisk')} onChange={(e) => setText(e.target.value)}/>
          <button onClick={() => setText('')}><img src={reset} alt="" /></button>
      </header>
      )}
    </>
  )
}

export default Navbar