<template>
  <div>Recipe Here</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";

const route = useRoute();
// eslint-disable-next-line no-unused-vars
const { data } = usePrismicDocumentByUID("recipes", route.params.uid);
</script>