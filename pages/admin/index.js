import AdminLayout from "layouts/AdminLayout";
import { notFoundInProduction } from "lib/helpers";
import routes from "lib/routes";

export default function ControlCenter() {
  return (
    <>
      <p>Nothing to see here yet</p>
    </>
  );
}

export const getStaticProps = notFoundInProduction();

ControlCenter.layoutProps = {
  currentRoute: routes.admin,
  pageTitle: "Control Center",
  metadata: {
    title: "Control Center - Alphabet Aerobics",
  },
};
ControlCenter.layout = AdminLayout;
