import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "mybestrecipes",
  clientConfig: {
    routes: [
      { type: "home", path: "/" },
      { type: "recipe", path: "/recipe/:uid" },
    ],
  },
});

export default prismic;
