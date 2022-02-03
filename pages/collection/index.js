import Image from "next/image";

import Hero from "components/Hero";
import { listCollections, sortCollections } from "lib/collections";

export async function getServerSideProps() {
  const allCollections = await listCollections();

  const [featuredCollection, ...collections] = sortCollections(allCollections);

  return {
    props: {
      collections,
      featuredCollection,
    },
  };
}

export default function Collection({ collections, featuredCollection }) {
  return (
    <article className="space-y-32">
      <Hero title="Collection">
        <p className="col-start-1 text-lg text-white/60">
          Lorem isupm dolor sit amet j’en ai rien a branler du texte je veux
          juste faire un fake paragraph, qu’on vienne me soulever si vous êtes
          pas content. Jvous attends.
        </p>
        <p className="col-start-1">
          <a className="underline" href="#">
            Suggest a link
          </a>
          &rarr;
        </p>
      </Hero>

      <section className="wide-width grid grid-cols-3 gap-4">
        <div className="col-span-3 relative">
          <Image
            alt={`${featuredCollection.name} collection cover image`}
            class="rounded-lg"
            height={400}
            src="https://fakeimg.pl/1140x400/1f2022"
            width={1140}
          />
          <div className="p-2 text-white/60 absolute bottom-4 left-4">
            See{" "}
            <strong className="font-semibold text-white">
              {featuredCollection.name} -&gt;
            </strong>
          </div>
        </div>

        {collections.map((collection) => (
          <div key={collection.id}>
            <Image
              alt={`${collection.name} collection cover image`}
              class="rounded-lg"
              height={300}
              src="https://fakeimg.pl/400x300/1f2022"
              width={400}
            />
            <div className="p-2 text-white/60">
              See{" "}
              <strong className="text-white">{collection.name} -&gt;</strong>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
