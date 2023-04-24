import i18n from "@/i18n"
const Trans = {
    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale
    },
    async switchLanguage(newLocale) {
        Trans.currentLocale = newLocale
        document.querySelector("html").setAttribute("lang", newLocale)
    },
    isLocaleSupported(locale) {
        return Trans.supportedLocales.includes(locale)
    },

    getUserLocale() {
        const locale = window.navigator.language ||
            window.navigator.userLanguage ||
            Trans.defaultLocale

        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },

    getPersistedLocale() {
        const persistedLocale = localStorage.getItem("user-locale")

        if (Trans.isLocaleSupported(persistedLocale)) {
            return persistedLocale
        } else {
            return null
        }
    },
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    }
}

export default Trans