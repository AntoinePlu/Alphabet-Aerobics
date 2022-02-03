import clsx from "clsx";

import { AdminTools, Head, NavBar } from "components";

export default function DefaultLayout({
  className,
  children,
  metadata = {},
  navBar = true,
}) {
  return (
    <>
      <Head metadata={metadata} />

      <div
        className={clsx(
          `min-h-screen pb-16 flex flex-col items-stretch bg-black text-white font-inter leading-normal`,
          className
        )}
      >
        {navBar && <NavBar />}
        <main className="flex-1">{children}</main>
      </div>

      <AdminTools />
    </>
  );
}
