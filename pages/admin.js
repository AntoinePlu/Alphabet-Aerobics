import { isProduction } from "lib/helpers";

export default function Admin() {
  return <>This is the admin dashboard</>;
}

export async function getStaticProps() {
  if (isProduction()) {
    return { notFound: true };
  }

  return { props: {} };
}
