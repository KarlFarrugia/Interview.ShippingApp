import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Shipping_EN } from "./Languages/en-EN.js"; // source for the english language
import { Shipping_MT } from "./Languages/mt-MT.js"; // source for the maltese language

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: Shipping_EN.translation, // english translations
      mt: Shipping_MT.translation  // maltese translations
    },
    lng: "en",
    fallbackLng: "en", // if translation is missing then fallback on english
    keySeparator: false, 
    interpolation: {
      escapeValue: false 
    }
  });
export default i18n;