<template>
  <main class="container">
    <header v-if="data" class="block">
      <h1>{{ $prismic.asText(data.data.title) }}</h1>
      <prismic-rich-text :field="data.data.description" />
      <prismic-image :field="data.data.home_image" />
    </header>

    <ul class="stack block" v-if="recipes">
      <li v-for="recipe in recipes" :key="recipe.uid">
        <prismic-link :field="recipe">
          <article class="nes-container is-rounded with-title">
            <prismic-text
              :field="recipe.data.title"
              wrapper="h2"
              class="title"
            />
            <section>
              <prismic-image :field="recipe.data.thumbnail" />
              <div class="stack">
                <ul>
                  <li>
                    <div class="nes-badge is-splited">
                      <span class="is-dark"> dur. -</span>
                      <span class="is-primary"
                        >{{ recipe.data.duration[0].text }}
                      </span>
                    </div>
                    <prismic-rich-text :field="recipe.data.description" />
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </prismic-link>
      </li>
    </ul>
  </main>
</template>

<script setup>
import {
  useAllPrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/vue";

const { data } = useSinglePrismicDocument("home");
const { data: recipes } = useAllPrismicDocumentsByType("recipe");
</script>

<style scoped>
a {
  display: block;
}
article section,
article ul {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}
</style>
