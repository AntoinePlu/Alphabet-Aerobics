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
          `min-h-screen bg-black text-white font-inter leading-normal`,
          className
        )}
      >
        <div className="max-w-screen-xl min-h-screen mx-auto main-grid auto-rows-min">
          {navBar && <NavBar className="col-span-narrow" />}
          {children}
        </div>
      </div>

      <AdminTools />
    </>
  );
}
