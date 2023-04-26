<template>
    <label class="block mb-1 text-sm py-5 px-4 text-gray-900 dark:text-white">Select a locale</label>
    <select @change="switchLanguage"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 m-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale"
            :selected="locale === sLocale">
            {{ t(`locale.${sLocale}`) }}
        </option>
    </select>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import Tr from "@/i18n/translation"

const { t, locale } = useI18n()

const supportedLocales = Tr.supportedLocales

const switchLanguage = async (event) => {
    const newLocale = event.target.value

    await Tr.switchLanguage(newLocale)
}

</script>