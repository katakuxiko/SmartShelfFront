import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
	ru: { translation: ru },
};

const getInitialLang = () => {
	if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
		const lng = localStorage.getItem("i18nextLng") || "";
		if (["ru", "kz"].includes(lng)) {
			return lng;
		}
	}
	return "ru";
};
const lang = getInitialLang();

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: resources,
		fallbackLng: lang ?? "ru",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
