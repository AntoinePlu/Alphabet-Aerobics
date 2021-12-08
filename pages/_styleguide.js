import StyleguideLayout from "layouts/StyleguideLayout";
import * as fixtures from "components/fixtures";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }

  return {
    props: {},
  };
}
export default function Styleguide() {
  const sortedFixtures = Object.fromEntries(
    Object.keys(fixtures)
      .sort()
      .map((key) => [key, fixtures[key]])
  );

  return (
    <main>
      <header>
        <h1 className="uppercase font-trump-gothic">Design System</h1>
      </header>
      {Object.entries(sortedFixtures).map(
        ([componentName, componentFixtures]) => (
          <section key={componentName}>
            <h2>{componentName}</h2>
            <ul>
              {componentFixtures.map((fixture) => (
                <li key={fixture.code}>
                  <h3>{fixture.description}</h3>
                  <LiveProvider code={fixture.code} scope={fixture.scope}>
                    <LiveEditor />
                    <LiveError />
                    <LivePreview />
                  </LiveProvider>
                </li>
              ))}
            </ul>
          </section>
        )
      )}
    </main>
  );
}

Styleguide.Layout = StyleguideLayout;
