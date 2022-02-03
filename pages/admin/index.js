import AdminLayout from "layouts/AdminLayout";
import { notFoundInProduction } from "lib/helpers";

export default function Admin() {
  return <>Admin home, nothing to see here yet</>;
}

export const getStaticProps = notFoundInProduction();

Admin.layoutProps = {
  metadata: {
    title: "Admin - Alphabet Aerobics",
  },
};
Admin.layout = AdminLayout;
