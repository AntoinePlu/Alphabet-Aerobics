import { Alert, AlertDescription, AlertTitle } from "@apee/components/ui/alert";
import { trumpGothic } from "@apee/lib/fonts";
import { cn } from "@apee/lib/utils";
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
    <div className="flex-1 flex flex-col justify-center bg-[url('/assets/images/home.svg')] bg-cover">
      <header className="p-[120px]">
        <h1 className="text-xl/6 uppercase opacity-60">
          {homepageData?.intro}
        </h1>
        <h2
          className={cn(
            "uppercase text-5xl leading-[normal] text-white mt-2.5 tracking-[0.96px]",
            trumpGothic.className
          )}
        >
          {homepageData?.jobTitle}
        </h2>
        <div>
          <h3
            className={cn(
              "inline-block uppercase text-5xl leading-[normal] text-transparent tracking-[0.96px] bg-gradient-to-br from-apee-gamingYellow via-apee-gamingOrange via-35% to-apee-gamingPurple bg-clip-text",
              trumpGothic.className
            )}
          >
            {homepageData?.catchphraseLine1}
            <br />
            {homepageData?.catchphraseLine2}
          </h3>
        </div>
        <a
          className={cn(
            "mt-10 inline-flex p-0.5 items-center justify-center text-sm/9 rounded-md",
            "bg-gradient-to-r from-apee-ctaOrange via-apee-ctaYellow to-apee-ctaEgg",
            "transition-all duration-200 bg-left bg-[length:200%] hover:bg-[length:100%]"
          )}
          href={`mailto:${homepageData.email}`}
        >
          <span className="px-5 bg-apee-black text-white uppercase font-bold rounded">
            {homepageData?.email.replace("@", " @ ")}
          </span>
        </a>
      </header>
    </div>
  );
}
