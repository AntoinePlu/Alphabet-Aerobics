import Image from "next/image";

import Hero from "components/Hero";
import supabase from "lib/supabase";

export async function getStaticProps() {
  const { error, data: categories } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    return { notFound: true };
  }

  await Promise.all(
    categories.map(async (category) => {
      const { error, data } = await supabase.storage
        .from("curation")
        .getPublicUrl(category.icon_path);
      category.iconUrl = data.publicURL;
    })
  );

  return {
    props: {
      categories,
    },
  };
}

export default function Curation({ categories }) {
  return (
    <article className="space-y-32">
      <Hero title="Curation">
        <p className="col-start-1 text-lg text-white-60">
          Lorem isupm dolor sit amet j’en ai rien a branler du texte je veux
          juste faire un fake paragraph, qu’on vienne me soulever si vous êtes
          pas content. Jvous attends.
        </p>
        <p className="col-start-1">
          <a className="underline" href="#">
            Suggest a link
          </a>
           -&gt;
        </p>
      </Hero>

      <section className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id}>
            <Image
              src={category.iconUrl}
              alt={`${category.name} category cover image`}
              width={364}
              height={273}
            />
            <div className="p-2 text-white-60">
              See{" "}
              <strong className="text-white-100">{category.name} -&gt;</strong>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
