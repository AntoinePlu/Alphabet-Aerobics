import path from "path";
import { readFile, writeFile } from "fs/promises";

import yaml from "js-yaml";

import { partition, sortBy } from "./helpers";

const COLLECTIONS_FILE = path.resolve("./data/collections/index.yml");

// In-memory cache for collections
let collectionsCache = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Returns a list of all collections.
export async function listCollections() {
  const now = Date.now();
  
  // Return cached data if still valid
  if (collectionsCache && (now - cacheTimestamp) < CACHE_TTL) {
    return collectionsCache;
  }

  const source = await readFile(COLLECTIONS_FILE);
  collectionsCache = yaml.load(source);
  cacheTimestamp = now;

  return collectionsCache;
}

// Adds a collection
export async function addCollection(collection) {
  const collections = await listCollections();

  collections.push(collection);

  await writeFile(COLLECTIONS_FILE, yaml.dump(collections));

  // Invalidate cache and update it with new data
  collectionsCache = collections;
  cacheTimestamp = Date.now();

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
