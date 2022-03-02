// Routes defined here are available through the application, this avoids
// remembering the exact paths and allows for making sure you're not having
// typos.
//
// To use nested routes (e.g. `routes.topic` and `route.topic.subtopic) make
// sure to define a `toString` property for the root to work. (See how it's
// done with the admin routes for example)
//
export default {
  home: "/",
  collection: "/collection/",
  admin: {
    toString: () => "/admin/",
    designSystem: "/admin/design-system/",
    collections: "/admin/collections/",
  },
};
