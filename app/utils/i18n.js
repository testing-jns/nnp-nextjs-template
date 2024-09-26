import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next) // pass i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: require('@/public/locales/en.json')
            },
            id: {
                translation: require('@/public/locales/id.json')
            },
        },
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already does escaping
        },
    });

export default i18n;
