<template>
  <div>{{data}}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";

const route = useRoute();
const { data } = usePrismicDocumentByUID("recipes", route.params.uid);
</script>