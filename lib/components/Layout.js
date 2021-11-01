import Head from "next/head";
import NavBar from "lib/components/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Antoine Plu</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
