<template>
  <nav
    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div class="px-2">
      <div class="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto" id="navbarSupportedContentX"
        data-te-collapse-item>
        <ul class="mr-auto flex flex-col md:flex-row" data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <RouterLink to="/"
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary ">
              {{ $t("nav.home") }}</RouterLink>
          </li>
          <li data-te-nav-item-ref>
            <RouterLink to="/about"
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary ">
              {{ $t("nav.about") }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <LanguageSwitcher />
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>