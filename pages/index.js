import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <body className="with-illustration" />
      </Head>
      <header className="narrow-width mx-auto grid grid-cols-2">
        <h2 className="col-start-1 uppercase text-white-60 text-xl">
          Hey I&apos;m Antoine.
        </h2>
        <h1 className="col-start-1 text-5xl uppercase font-trump-gothic leading-tight flex flex-col">
          <span>Senior Designer</span>
          <div className="flex flex-col bg-clip-text text-transparent bg-gradient-to-br from-yellow to-purple via-orange">
            <span>Passionate about</span>
            <span>Sports and Gaming</span>
          </div>
        </h1>
      </header>
    </>
  );
}
