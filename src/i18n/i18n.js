import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      browse: "Browse Donations",
      donate: "Donate Now",
      request: "Request Help",
      profile: "Profile"
    }
  },
  te: {
    translation: {
      dashboard: "డాష్‌బోర్డ్",
      browse: "దానం చూడండి",
      donate: "దానం చేయండి",
      request: "సహాయం అడగండి",
      profile: "ప్రొఫైల్"
    }
  },
  hi: {
    translation: {
      dashboard: "डैशबोर्ड",
      browse: "दान देखें",
      donate: "दान करें",
      request: "मदद मांगें",
      profile: "प्रोफ़ाइल"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;