import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../src/locales/en/translation.json";
import translationUA from "../src/locales/ua/translation.json";
import translationES from "../src/locales/es/translation.json";


const availableLanguages = ["en", "ua", "es"];

const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    },
    es: {
        translation: translationES
    }
};


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',

        detection: {
            checkWhitelist: true
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;