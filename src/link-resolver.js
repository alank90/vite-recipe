// The Link Resolver takes a Prismic document as its argument
export default function(doc) {
    // Then it executes a switch to determine how to treat the item
    if (doc.type === "Home") {
      // If you have a singleton 'homepage' document, you return the root
      return "/";
    }
    if (doc.type === "recipes") {
      // For a 'recipe', you could use the recipe's Unique ID (UID)
      return "/recipes/" + doc.uid;
    }
    // For other document types, just use the UID
    if (doc.uid) {
      return "/" + doc.uid;
    }
    // Otherwise, return a 404
    return "/404";
  }