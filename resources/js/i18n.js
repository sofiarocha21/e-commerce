import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHome from "../../lang/en/home.json";
import ptHome from "../../lang/pt/home.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: enHome,
    },
    pt: {
      home: ptHome,
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
