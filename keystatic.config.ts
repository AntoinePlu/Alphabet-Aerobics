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
        catchphraseLine1: fields.text({ label: "Catchprase (Line 1)" }),
        catchphraseLine2: fields.text({ label: "Catchprase (Line 2)" }),
        email: fields.text({ label: "Email" }),
      },
    }),
  },
});
