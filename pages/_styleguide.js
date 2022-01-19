import { readFile } from "fs/promises";

import { useEffect, useState } from "react";
import Head from "next/head";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import sortBy from "lib/sortBy";
import * as components from "components";

const { Menu } = components;

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }

  const { default: glob } = await import("fast-glob");
  const { default: YAML } = await import("yaml");

  const fixtureFiles = await glob("components/**/*.fixtures.yml");

  const rawFixtures = await Promise.all(
    fixtureFiles.map(async (fixtureFile) => {
      const fileContents = await readFile(fixtureFile, "utf-8");
      return YAML.parse(fileContents);
    })
  );
  const sortedFixtures = sortBy(rawFixtures, "component");

  return {
    props: { fixtures: sortedFixtures },
  };
}

export default function Styleguide({ fixtures }) {
  const [targetComponent, setTargetComponent] = useState("");

  useEffect(() => {
    setTargetComponent(window.location.hash.slice(1));
  });

  return (
    <>
      <Head>
        <title>Alphabet Aerobics Design System</title>
      </Head>

      <div className="h-screen flex overflow-hidden bg-black">
        <aside className="w-80 mt-40 pl-16 overflow-hidden space-y-2">
          <Menu>
            {fixtures.map(({ component }) => (
              <Menu.Item
                key={component}
                href={`#${component}`}
                selected={targetComponent === component}
                className="group"
                iconRight={() => (
                  <span className="opacity-0 group-hover:opacity-100 transition">
                    &rarr;
                  </span>
                )}
              >
                {component}
              </Menu.Item>
            ))}
          </Menu>
        </aside>

        <main className="flex-1 p-16 space-y-8 overflow-auto scroll-smooth">
          <h1 className="heading text-6xl">Design System</h1>
          <div className="space-y-16 max-w-screen-xl">
            {fixtures.map(({ component, description, examples }) => (
              <section
                key={component}
                id={`${component}`}
                className="space-y-4"
              >
                <header className="space-y-2">
                  <h2 className="heading text-4xl">{component}</h2>
                  {description ? (
                    <h3 className="text-lg">{description}</h3>
                  ) : null}
                </header>
                <ul className="space-y-4">
                  {examples.map((example) => (
                    <li key={example.title} className="space-y-2">
                      <h3 className="text-white-80 font-bold">
                        {example.title}
                      </h3>
                      <p>{example.description}</p>
                      <div className="space-y-2">
                        <LiveProvider code={example.code} scope={components}>
                          <div className="w-full flex gap-4">
                            <div className="flex-1 rounded-md border border-white-4 bg-gray-dark p-2">
                              <LiveEditor />
                            </div>
                            <div className="flex-1 rounded-md border border-white-10 p-4">
                              <LivePreview />
                            </div>
                          </div>
                          <LiveError className="text-xs p-4 text-orange border-orange border" />
                        </LiveProvider>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

Styleguide.layoutProps = {
  navBar: false,
};
