import Head from "next/head";
import clsx from "clsx";

import NavBar from "components/NavBar";

const DEFAULT_CLASSNAME =
  "min-h-screen bg-black text-white-100 font-inter leading-normal pb-32";

export default function Layout({ className: classNameOverload, children }) {
  const className = clsx(DEFAULT_CLASSNAME, classNameOverload);

  return (
    <>
      <Head>
        <title>Antoine Plu</title>
      </Head>

      <div className={className}>
        <NavBar />
        <main className="full-width">{children}</main>
      </div>
    </>
  );
}
