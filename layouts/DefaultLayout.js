import Head from "next/head";
import clsx from "clsx";

import NavBar from "components/NavBar";

const DEFAULT_CLASSNAME =
  "min-h-screen bg-black text-white-60 font-inter leading-normal";

export default function DefaultLayout({
  className: classNameOverload,
  children,
  navBar = true,
}) {
  const className = clsx(DEFAULT_CLASSNAME, classNameOverload);

  return (
    <>
      <Head>
        <title>Antoine Plu</title>
      </Head>

      <div className={className}>
        {navBar && <NavBar />}
        <main>{children}</main>
      </div>
    </>
  );
}
