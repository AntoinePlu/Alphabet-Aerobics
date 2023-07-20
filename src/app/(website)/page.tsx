import { Alert, AlertDescription, AlertTitle } from "@apee/components/ui/alert";
import { createReader } from "@keystatic/core/reader";
import config from "keystatic.config";

const reader = createReader(process.cwd(), config);

export default async function Home() {
  const homepageData = await reader.singletons.homepage.read();

  if (!homepageData) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <div>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              <p>
                Unable to fetch homepage data, please make sure it exists in
                Keystatic
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-xl/none uppercase opacity-60">
        {homepageData?.intro}
      </h1>
      <h2>{homepageData?.jobTitle}</h2>
      <h3>{homepageData?.catchphrase}</h3>
      <a href={`mailto:${homepageData.email}`}>{homepageData?.email}</a>
    </>
  );
}
