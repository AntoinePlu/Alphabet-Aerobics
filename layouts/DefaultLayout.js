import Head from "next/head";
import clsx from "clsx";

import routes from "lib/routes";
import { isDevelopment } from "lib/helpers";
import { BookOpenIcon, LibraryIcon, Key, Link, NavBar } from "components";

export default function DefaultLayout({ className, children, navBar = true }) {
  return (
    <>
      <Head>
        <title>Antoine Plu</title>
      </Head>

      <div
        className={clsx(
          `min-h-screen flex flex-col items-stretch bg-black text-white-100 font-inter leading-normal`,
          className
        )}
      >
        {navBar && <NavBar />}
        <main className="flex-1">{children}</main>
      </div>

      {isDevelopment && (
        <nav className="fixed bottom-0 right-0 flex items-center justify-end p-4 gap-x-4">
          <Link href={routes.admin}>
            <Key>
              <LibraryIcon />
              <span>Admin</span>
            </Key>
          </Link>

          <Link href={routes.styleguide}>
            <Key>
              <BookOpenIcon />
              <span>Styleguide</span>
            </Key>
          </Link>
        </nav>
      )}
    </>
  );
}
