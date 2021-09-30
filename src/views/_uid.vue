<template>
  <div>Single Recipe Here {{ data }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";

const route = useRoute();
console.log(route.params.uid);
// eslint-disable-next-line no-unused-vars
const { data } = usePrismicDocumentByUID("recipes", route.params.uid);
console.log(data);
</script>