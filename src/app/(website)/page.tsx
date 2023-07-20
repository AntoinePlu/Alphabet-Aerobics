import { createReader } from "@keystatic/core/reader";
import config from "keystatic.config";

const reader = createReader(process.cwd(), config);

export default async function Home() {
  const homepageData = await reader.singletons.homepage.read();
  return <pre>{JSON.stringify(homepageData, null, 2)}</pre>;
}
