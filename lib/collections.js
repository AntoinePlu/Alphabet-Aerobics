import path from "path";
import { readFile, writeFile } from "fs/promises";

import yaml from "js-yaml";

import { partition, sortBy } from "./helpers";

const COLLECTIONS_FILE = path.resolve("./data/collections/index.yml");

// Returns a list of all collections.
export async function listCollections() {
  const source = await readFile(COLLECTIONS_FILE);

  return yaml.load(source);
}

// Adds a collection
export async function addCollection(collection) {
  const collections = await listCollections();

  collections.push(collection);

  await writeFile(COLLECTIONS_FILE, yaml.dump(collections));

  return collections;
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
