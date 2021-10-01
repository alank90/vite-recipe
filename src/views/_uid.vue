<template>
  <main class="container stack block">
    <div>Single Recipe Here {{ data }}</div>
    <header class="block">
      <h1> data </h1>
    </header>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";

const route = useRoute();

// eslint-disable-next-line no-unused-vars
const { data } = usePrismicDocumentByUID("recipes", route.params.uid);

console.log(data);
</script>