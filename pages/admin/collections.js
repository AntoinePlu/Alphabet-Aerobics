import AdminLayout from "layouts/AdminLayout";
import { notFoundInProduction } from "lib/helpers";
import routes from "lib/routes";

export default function CollectionsAdmin() {
  return <>Collections</>;
}

export const getStaticProps = notFoundInProduction();

CollectionsAdmin.layoutProps = {
  currentRoute: routes.admin.collections,
  metadata: {
    title: "Collections - Admin - Alphabet Aerobics",
  },
};
CollectionsAdmin.layout = AdminLayout;
