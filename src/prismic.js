import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "mybestrecipes",
  clientConfig: {
    defaultParams: {
      routes: [
        { type: "home", path: "/" },
        { type: "recipes", path: "/recipes/:uid" },
      ],
    },
  },
});

export default prismic;
