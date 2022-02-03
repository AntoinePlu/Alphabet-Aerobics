import NextHead from "next/head";

const DEFAULT_METADATA = {
  title: "Antoine Plu",
};

export default function Head({ metadata }) {
  const { title } = { ...DEFAULT_METADATA, ...metadata };

  return <NextHead>{title ? <title>{title}</title> : null}</NextHead>;
}
