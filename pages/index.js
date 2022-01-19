export default function Home() {
  return (
    <>
      <header className="narrow-width mx-auto grid grid-cols-2 text-white-100">
        <h2 className="col-start-1 uppercase text-white-60 text-xl leading-tight">
          Hey I&apos;m Antoine.
        </h2>
        <h1 className="col-start-1 text-5xl uppercase font-trump-gothic leading-tight tracking-wide flex flex-col items-start mt-2">
          <span>Senior Designer</span>
          <div className="inline-flex flex-col bg-clip-text text-transparent bg-gradient-to-br from-[#FFAC30] to-[#8C35FB] via-[#DF5B22]">
            <span>Passionate about</span>
            <span>Sports and Gaming</span>
          </div>
        </h1>
        <div className="col-start-1 mt-10">
          <a href="mailto:hey at antoineplu.co" className="block w-max">
            <div
              aria-hidden="true"
              className="z-[-1] absolute w-max h-9 bg-gradient-to-r from-[#EA504D] to-[#D88D20] rounded blur text-transparent opacity-40"
            >
              <div className="invisible flex items-center justify-center h-full px-5 uppercase text-sm font-bold leading-9">
                hey at antoineplu.co
              </div>
            </div>
            <div className="p-px bg-gradient-to-r from-orange to-yellow rounded">
              <div className="flex items-center justify-center h-full px-5 rounded uppercase text-sm font-bold leading-9 bg-black">
                hey at antoineplu.co
              </div>
            </div>
          </a>
        </div>
      </header>
    </>
  );
}

Home.layoutProps = {
  className: "bg-wave-home",
};
