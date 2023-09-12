import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../../../core/translations/en.json'
import translationFR from '../../../core/translations/fr.json'
import translationJP from '../../../core/translations/jp.json'

export const resources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
    jp: {
        translation: translationJP,
    },
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})
