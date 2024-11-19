import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng:'en',
        resources: {
            ru: {
                translation: {
                    Zametki: 'Заметки',
                    Poisk: 'Поиск...', 
                    allNotes: 'Все заметки',
                    noNotes: 'Нет заметок',
                    notFound: 'Ничего не найдено...',
                    list: 'Список',
                    grid: 'Сетка',
                    edit: 'РЕДАКТИРОВАТЬ',
                    del: "УДАЛИТЬ",
                    modalTitleAdd: "Добавить заметку",
                    modalTitleEdit: "Измените заметку",
                    modalAdd: "ДОБАВИТЬ",
                    modalCancel: "ОТМЕНА",
                    modalEdit: "ИЗМЕНИТЬ"
                }
            },
            uz: {
                translation: {
                    Zametki: 'Eslatmalar',
                    Poisk: 'Qidirish...', 
                    allNotes: 'Barcha eslatmalar',
                    noNotes: "Eslatmalar yo'q",
                    notFound: 'Hech narsa topilmadi...',
                    list: 'Roʻyxat',
                    grid: 'Panjara',
                    edit: "O'ZGARTIRISH",
                    del: "O'CHIRISH",
                    modalTitleAdd: "Eslatma qo’shish",
                    modalAdd: "QO’SHISH",
                    modalCancel: "BEKOR QILISH",
                    modalEdit: "O'ZGARTIRISH",
                    modalTitleEdit: "Eslatmani tahrirlash",
                }
            }
        }
    })