<template>
  <div
    class="block rounded-lg bg-white w-80 p-6 m-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <div class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      <h1>{{ $t("about.header") }}</h1>

      <p>{{ $t("about.donations", { donations: $n(1456, "currencyFormat") }) }}</p>
    </div>
  </div>
</template>