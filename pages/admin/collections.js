import { useState } from "react";
import Image from "next/image";
import { EyeIcon, PlusCircleIcon } from "@heroicons/react/solid";
import useSWR from "swr";

import { Button, Form, Link, SlideOver } from "components";
import AdminLayout from "layouts/AdminLayout";
import { formValues, notFoundInProduction } from "lib/helpers";
import { GET, POST } from "lib/http";
import routes from "lib/routes";
import { listCollections, sortCollections } from "lib/collections";

export default function CollectionsAdmin({ collections: staticCollections }) {
  const { data: collections, mutate } = useSWR("/api/collections/", GET, {
    fallbackData: staticCollections,
  });
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

  const handleAddCollection = async (ev) => {
    ev.preventDefault();
    await mutate(POST("/api/collections/", formValues(ev.target)), false);
    setIsAddPanelOpen(false);
  };

  return (
    <>
      <ul className="box-dark flex justify-end space-x-3 py-2">
        <li>
          <Link.Button href={routes.collection}>
            <EyeIcon className="h-5 w-5" />
            <span>Preview</span>
          </Link.Button>
        </li>
        <li>
          <Button primary onClick={() => setIsAddPanelOpen(true)}>
            <PlusCircleIcon className="h-5 w-5" />
            <span>Add</span>
          </Button>
        </li>
      </ul>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {collections.map((collection) => (
          <div key={collection.slug} className="relative">
            <div className="focusable group block aspect-video w-full">
              <Image
                alt={`${collection.name} collection cover image`}
                className="rounded-lg group-hover:opacity-80"
                height={300}
                src="https://fakeimg.pl/400x300/1f2022"
                width={400}
              />
              <button
                className="absolute inset-0 focus:outline-none"
                type="button"
              >
                <span className="sr-only">
                  View details for {collection.name}
                </span>
              </button>
            </div>
            <div className="p-2 text-white/60">
              <strong className="text-white">{collection.name}</strong>
            </div>
          </div>
        ))}
      </div>

      <SlideOver
        isOpen={isAddPanelOpen}
        setIsOpen={setIsAddPanelOpen}
        title="Add Collection"
      >
        {({ setIsOpen }) => (
          <>
            <Form
              focusFirst
              className="flex flex-col space-y-4"
              id="add-collection"
              onSubmit={handleAddCollection}
            >
              <Form.TextField
                label="Collection Name"
                name="name"
                placeholder="Cool stuff!"
              />
              <Form.TextField
                label="URL Slug"
                name="slug"
                placeholder="cool-stuff"
              />
              <Form.TextField
                as="textarea"
                label="Description"
                name="description"
                placeholder="A short description"
              />
              <div className="flex flex-shrink-0 flex-row-reverse justify-between space-x-4 px-4 py-4">
                <Button primary type="submit">
                  Save
                </Button>
                <Button type="button" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
              </div>
            </Form>
          </>
        )}
      </SlideOver>
    </>
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
