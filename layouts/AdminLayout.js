import { AdminMenu } from "components";
import DefaultLayout from "layouts/DefaultLayout";

const DEFAULT_METADATA = {
  title: "Admin - Alphabet Aerobics",
};

export default function AdminLayout({
  children,
  className,
  currentRoute,
  metadata = {},
  pageProps,
  pageTitle,
}) {
  return (
    <DefaultLayout
      {...{
        children,
        className,
        metadata: { ...DEFAULT_METADATA, ...metadata },
      }}
      navBar={false}
    >
      <AdminMenu
        className="sticky top-0 mt-24 self-start col-span-3"
        currentRoute={currentRoute}
        submenu={pageProps.submenu}
      />
      <main className="pt-20 col-start-4 col-span-9 space-y-3">
        <h1 className="heading text-6xl">{pageTitle}</h1>
        <div className="max-w-screen-xl">{children}</div>
      </main>
    </DefaultLayout>
  );
}
