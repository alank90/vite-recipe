<template>
  <prismic-rich-text :field="slice.primary.directions" />
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";

export default {
  props: getSliceComponentProps(),
};
</script>