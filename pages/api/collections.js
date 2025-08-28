import {
  addCollection,
  listCollections,
  sortCollections,
} from "lib/collections";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      return await get(req, res);
    case "POST":
      return await post(req, res);
  }
};

async function get(req, res) {
  const rawCollections = await listCollections();
  const collections = sortCollections(rawCollections).flat();

  return res.json(collections);
}

async function post(req, res) {
  const { description, name, slug } = req.body;

  const collections = await addCollection({ description, name, slug });
  const sortedCollections = sortCollections(collections).flat();

  return res.json(sortedCollections);
}
