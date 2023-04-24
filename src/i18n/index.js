import { createI18n } from "vue-i18n";
import pluralRules from "./rules/pluralization";
import numberFormats from "./rules/numbers";
import datetimeFormats from "./rules/datetime";
import en from "./locales/en.json";
import ru from "./locales/ru.json" ;

const messages = {
    en: {
        nav: {
            home: "Home",
            about: "About"
        },
        home: {
            header: "Welcome to the Vue 3 I18n tutorial!",
            created_by: "This tutorial was brought to you by {company}.",
            num_visits: "This page hasn't been visited :( | This page has been visited {n} time | This page has been visited {n} times"
        },
        about: {
            header: "About us",
            donations: "Donations raised: {donations}"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            about: "O нас"
        },
        home: {
            header: "Добро пожаловать в руководство Vue 3 I18n!",
            created_by: "Это руководство создано для вас компанией {company}.",
            num_visits: "Страницу не посещали :( | Страницу посетили {n} раз | Страницу посетили {n} раза | Страницу посетили {n} раз"
        },
        about: {
            header: "O нас",
            donations: "Пожертвований собрано: {donations}"
        }
    }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: {
        en,
        ru
    },
    pluralRules,
    numberFormats,
    datetimeFormats
})