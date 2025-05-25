import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import từng namespace
import enHome from "./locales/en/home.json";
import viHome from "./locales/vi/home.json";
import enNavbar from "./locales/en/navbar.json";
import viNavbar from "./locales/vi/navbar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        navbar: enNavbar,
      },
      vi: {
        home: viHome,
        navbar: viNavbar,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: ["home", "navbar"],
    defaultNS: "home",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
