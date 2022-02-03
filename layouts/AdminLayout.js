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
        {children}
      </div>
    </DefaultLayout>
  );
}
