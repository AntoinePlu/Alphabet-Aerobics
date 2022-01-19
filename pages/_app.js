import { Fragment } from "react";
import DefaultLayout from "layouts/DefaultLayout";

import "styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const Layout =
    Component.layout === null ? NullLayout : Component.layout ?? DefaultLayout;

  return (
    <Layout {...Component.layoutProps} pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

const NullLayout = ({ children, key }) => <Fragment {...{ children, key }} />;
