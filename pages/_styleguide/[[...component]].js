import StyleguideLayout from "lib/layouts/StyleguideLayout";

export function getStaticProps({ params }) {
  return {
    props: { params },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { component: [] } }],
    fallback: true,
  };
}

export default function Styleguide({ params }) {
  return "Styleguide";
}

Styleguide.Layout = StyleguideLayout;
