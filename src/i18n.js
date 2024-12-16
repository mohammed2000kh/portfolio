import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";
import de from './locales/de/translation.json'; // إضافة اللغة الألمانية
i18n
  .use(LanguageDetector) // للكشف التلقائي عن اللغة
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      de: { translation: de },
      },
      lng: "de",
    fallbackLng: "en", // اللغة الافتراضية
    interpolation: {
      escapeValue: false, // لا حاجة له عند استخدام React
    },
  });

export default i18n;
