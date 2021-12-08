import DefaultLayout from "layouts/DefaultLayout";

import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? DefaultLayout;

  return (
    <Layout {...Component.layoutProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
