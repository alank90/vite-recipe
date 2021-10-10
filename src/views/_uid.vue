<template>
  <main v-if="recipe" class="container stack block">
    <div>Single Recipe Here</div>
    <header class="block">
      <h1>{{ $prismic.asText(recipe.data.title) }}</h1>
      <prismic-rich-text :field="recipe.data.description" />
    </header>

    <slice-zone :slices="recipe.data.body" :components="components" />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import {
  getSliceZoneComponents,
  usePrismicDocumentByUID,
} from "@prismicio/vue";
import BannerImage from "../components/slices/BannerImage.vue";
import Ingredients from "../components/slices/Ingredients.vue";

const route = useRoute();

// eslint-disable-next-line no-unused-vars
const { data: recipe } = usePrismicDocumentByUID("recipe", route.params.uid);
const components = getSliceZoneComponents({
  bannerimage: BannerImage,
  ingredients: Ingredients,
});
</script>
