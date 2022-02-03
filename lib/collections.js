import path from "path";
import { readFile } from "fs/promises";

import yaml from "js-yaml";

import { partition, sortBy } from "./helpers";

// Returns a list of all collections.
export async function listCollections() {
  const source = await readFile(path.resolve("./data/collections/index.yml"));

  return yaml.load(source);
}

// This function sorts collections by featured status then by name.
// Ideally you should only have 1 featured collection.
export function sortCollections(collections) {
  const [featuredCollections, regularCollections] = partition(
    collections,
    (collection) => collection.featured
  );

  return [
    ...sortBy(featuredCollections, "name"),
    ...sortBy(regularCollections, "name"),
  ];
}
