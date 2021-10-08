<template>
  <figure>
    <prismic-image :field="slice.primary.bannerimage" />
  </figure>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";
export default {
  props: getSliceComponentProps(),
};
</script>

<style scoped>
figure {
  width: 480px;
  margin: 0 auto;
}
img {
  max-width: 100%;
}
</style>