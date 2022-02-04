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
      <div className="flex bg-black">
        <AdminMenu currentRoute={currentRoute} submenu={pageProps.submenu} />
        <main className="flex-1 p-16 space-y-8">
          <h1 className="heading text-6xl">{pageTitle}</h1>
          <div className="max-w-screen-xl">{children}</div>
        </main>
      </div>
    </DefaultLayout>
  );
}
