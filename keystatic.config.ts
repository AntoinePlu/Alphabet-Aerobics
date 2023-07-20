// keystatic.config.ts
import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "src/content/_homepage",
      schema: {
        intro: fields.text({ label: "Intro" }),
        jobTitle: fields.text({ label: "Job Title" }),
        catchphrase: fields.text({ label: "Catchprase" }),
        email: fields.text({ label: "Email" }),
      },
    }),
  },
});
