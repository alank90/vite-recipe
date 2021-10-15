import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "mybestrecipes",
  clientConfig: {
    defaultParams: {
      routes: [
        { type: "home", path: "/" },
        { type: "recipe", path: "/recipe/:uid" },
      ],
    },
  },
});

export default prismic;
