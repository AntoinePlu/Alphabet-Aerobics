import { readFile } from "fs/promises";

import { useEffect, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import * as components from "components";
import AdminLayout from "layouts/AdminLayout";
import { notFoundInProduction, sortBy } from "lib/helpers";
import routes from "lib/routes";

const { Link, Menu } = components;

export default function DesignSystem({ fixtures }) {
  const [targetComponent, setTargetComponent] = useState("");

  useEffect(() => {
    setTargetComponent(window.location.hash.slice(1));
  });

  return (
    <div className="space-y-16">
      {fixtures.map(({ component, description, examples }) => (
        <section key={component} className="space-y-4" id={`${component}`}>
          <header className="space-y-2">
            <h2 className="heading text-4xl">{component}</h2>
            {description ? <h3 className="text-lg">{description}</h3> : null}
          </header>
          <ul className="space-y-4">
            {examples.map((example) => (
              <li key={example.title} className="space-y-2">
                <h3 className="text-white/80 font-bold">{example.title}</h3>
                <p>{example.description}</p>
                <div className="space-y-2">
                  <LiveProvider code={example.code} scope={components}>
                    <div className="w-full flex gap-4">
                      <div className="flex-1 rounded-md border border-white/4 bg-gray-dark p-2">
                        <LiveEditor />
                      </div>
                      <div className="flex-1 rounded-md border border-white/10 p-4">
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
  );
}

export const getStaticProps = notFoundInProduction(async () => {
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
    props: {
      fixtures: sortedFixtures,
      submenu: {
        title: "Components",
        items: sortedFixtures.map(({ component }) => ({
          key: component,
          href: `#${component}`,
          children: component,
        })),
      },
    },
  };
});

DesignSystem.layout = AdminLayout;
DesignSystem.layoutProps = {
  currentRoute: routes.admin.designSystem,
  pageTitle: "Design System",
  metadata: {
    title: "Design System - Admin - Alphabet Aerobics",
  },
};
