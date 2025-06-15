import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import từng namespace
import enHome from "./locales/en/home.json";
import viHome from "./locales/vi/home.json";
import enNavbar from "./locales/en/navbar.json";
import viNavbar from "./locales/vi/navbar.json";
import enAboutOverview from "./locales/en/aboutOverview.json";
import viAboutOverview from "./locales/vi/aboutOverview.json";
import enTrainingStructure from "./locales/en/trainingStructure.json";
import viTrainingStructure from "./locales/vi/trainingStructure.json";
import enOrganizations from "./locales/en/organizations.json";
import viOrganizations from "./locales/vi/organizations.json";
import enUndergraduateProgram from "./locales/en/undergraduateProgram.json";
import viUndergraduateProgram from "./locales/vi/undergraduateProgram.json";
import enMasterProgram from "./locales/en/masterProgram.json";
import viMasterProgram from "./locales/vi/masterProgram.json";
import enInformationTechnology from "./locales/en/informationTechnology.json";
import viInformationTechnology from "./locales/vi/informationTechnology.json";
import enInformationSecurity from "./locales/en/informationSecurity.json";
import viInformationSecurity from "./locales/vi/informationSecurity.json";
import enTelecommunication from "./locales/en/telecommunication.json";
import viTelecommunication from "./locales/vi/telecommunication.json";
import enDepartments from "./locales/en/departments.json";
import viDepartments from "./locales/vi/departments.json";
import viContact from "./locales/vi/contact.json";
import enContact from "./locales/en/contact.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        navbar: enNavbar,
        aboutOverview: enAboutOverview,
        trainingStructure: enTrainingStructure,
        organizations: enOrganizations,
        undergraduateProgram: enUndergraduateProgram,
        masterProgram: enMasterProgram,
        informationTechnology: enInformationTechnology,
        informationSecurity: enInformationSecurity,
        telecommunication: enTelecommunication,
        departments: enDepartments,
        contact: enContact,
      },
      vi: {
        home: viHome,
        navbar: viNavbar,
        aboutOverview: viAboutOverview,
        trainingStructure: viTrainingStructure,
        organizations: viOrganizations,
        undergraduateProgram: viUndergraduateProgram,
        masterProgram: viMasterProgram,
        informationTechnology: viInformationTechnology,
        informationSecurity: viInformationSecurity,
        telecommunication: viTelecommunication,
        departments: viDepartments,
        contact: viContact,
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
    saveMissing: true,
    missingKeyHandler: (key, fallbackValue) => {
      console.warn(`Missing translation for key: ${key}`);
      return fallbackValue;
    },
    fallbackNS: "home",
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;
