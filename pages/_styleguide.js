import { readFile } from "fs/promises";

import Head from "next/head";
import { micromark } from "micromark";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import sortBy from "lib/sortBy";
import * as components from "components";

console.log(components);

const { Link } = components;

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
  return (
    <>
      <Head>
        <title>Alphabet Aerobics Design System</title>
      </Head>

      <div className="min-h-screen bg-black text-white-100 font-inter leading-normal flex">
        <nav className="w-60 min-w-max bg-gray-dark border-r border-white-4 space-y-2">
          <Link
            noUnderline
            hint="back"
            href="/"
            className="block text-sm text-white-60 py-2 px-4 border-b border-white-4 hover:bg-gray-highlight"
          >
            Back to website
          </Link>
          <h2 className="py-2 px-4 text-lg text-white-80">Components</h2>
          <ul className="py-2 px-4">
            {fixtures.map(({ component }) => (
              <li key={component}>
                <Link href={`#${component}`}>{component}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 p-16 max-w-screen-xl mx-auto space-y-16">
          {fixtures.map(({ component, description, examples }) => (
            <section key={component} id={`${component}`} className="space-y-4">
              <header className="space-y-2">
                <h2 className="uppercase font-trump-gothic text-4xl">
                  {component}
                </h2>
                {description ? (
                  <h3 className="text-white-80 text-lg">{description}</h3>
                ) : null}
              </header>
              <ul className="space-y-4">
                {examples.map((example) => (
                  <li key={example.title} className="space-y-2">
                    <h3 className="font-bold">{example.title}</h3>
                    <p>{example.description}</p>
                    <div className="space-y-2">
                      <LiveProvider code={example.code} scope={components}>
                        <div className="w-full flex gap-4 items-start">
                          <div className="flex-1 border border-white-4 bg-gray-dark p-2">
                            <LiveEditor />
                          </div>
                          <div className="flex-1 border border-white-4 p-4">
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
        </main>
      </div>
    </>
  );
}

Styleguide.Layout = null;
