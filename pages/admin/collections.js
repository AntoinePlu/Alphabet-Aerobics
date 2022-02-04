import { useState } from "react";
import Image from "next/image";

import { Button, StarIcon } from "components";
import AdminLayout from "layouts/AdminLayout";
import { notFoundInProduction } from "lib/helpers";
import routes from "lib/routes";
import { listCollections, sortCollections } from "lib/collections";

export default function CollectionsAdmin({ collections }) {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const unsetSelectedCollection = () => setSelectedCollection(null);

  return (
    <div className="grid grid-cols-4 gap-4">
      {collections.map((collection) => (
        <div key={collection.id} className="relative">
          <div onClick={() => setSelectedCollection(collection)}>
            <Image
              alt={`${collection.name} collection cover image`}
              class="rounded-lg"
              height={300}
              src="https://fakeimg.pl/400x300/1f2022"
              width={400}
            />
            <div className="p-2 text-white/60">
              <strong className="text-white">{collection.name}</strong>
            </div>
          </div>
          {selectedCollection === collection ? (
            <div
              className="absolute inset-0 bottom-8 flex items-center justify-center gap-x-4 bg-black/80"
              onClick={unsetSelectedCollection}
            >
              <StarIcon />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = notFoundInProduction(async () => {
  const rawCollections = await listCollections();
  const collections = sortCollections(rawCollections).flat();

  return {
    props: {
      collections,
    },
  };
});

CollectionsAdmin.layoutProps = {
  currentRoute: routes.admin.collections,
  pageTitle: "Collections",
  metadata: {
    title: "Collections - Admin - Alphabet Aerobics",
  },
};
CollectionsAdmin.layout = AdminLayout;
