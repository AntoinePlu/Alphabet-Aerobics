import Head from "next/head";

export default function StyleguideLayout({ children }) {
  return (
    <>
      <Head>
        <title>Design System - Antoine Plu</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
