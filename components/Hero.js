import RssIcon from "components/icons/RssIcon";

export default function Hero({ title, children }) {
  return (
    <header className="narrow-width mx-auto grid grid-cols-2 gap-y-6">
      <h1 className="inline-flex items-baseline text-5xl uppercase font-trump-gothic leading-tight">
        {title}
        <RssIcon className="inline text-white-60 ml-4" />
      </h1>
      {children}
    </header>
  );
}
