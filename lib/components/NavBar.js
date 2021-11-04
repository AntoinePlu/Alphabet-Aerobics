import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

import CogIcon from "./icons/CogIcon";
import TwitterIcon from "./icons/TwitterIcon";
import DribbbleIcon from "./icons/DribbbleIcon";
import SpotifyIcon from "./icons/SpotifyIcon";

const MENU = [
  { label: "Home", path: "/", exact: true },
  { label: "Story", path: "/story" },
  { label: "Work", path: "/work" },
  { label: "Curation", path: "/curation" },
];

const SOCIAL = [
  { label: "Twitter", url: "https://twitter.com/AntoinePlu" },
  { label: "Dribbble", url: "https://dribbble.com/AntoinePlu/" },
  { label: "Spotify", url: "" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = useRouter();
  const toggleMenuOpen = () => setIsMenuOpen((isOpen) => !isOpen);

  const currentSection = MENU.find(({ path, exact }) =>
    exact ? router.pathname === path : router.pathname.startsWith(path)
  );

  return (
    <header className="narrow-width h-8 mt-20 mb-32 leading-tight uppercase flex items-center space-x-4">
      <TextWithKey onClick={toggleMenuOpen} keyText="M" text="Menu" />
      <div className="flex-1" />
      {isMenuOpen ? (
        <nav className="flex space-x-6">
          <div className="flex space-x-3">
            <Key>Q</Key>
            <Key>E</Key>
          </div>
          <ul className="flex items-center space-x-6">
            {MENU.map((menuItem) => (
              <MenuItem
                key={menuItem.label}
                {...menuItem}
                isSelected={currentSection?.label === menuItem.label}
              />
            ))}
            <div className="w-2px h-full bg-gray-dark" />
            <div className="flex space-x-4">
              <Link href="https://twitter.com/AntoinePlu">
                <a>
                  <Key>
                    <TwitterIcon />
                  </Key>
                </a>
              </Link>
              <Link href="https://dribbble.com/AntoinePlu/">
                <a>
                  <Key>
                    <DribbbleIcon />
                  </Key>
                </a>
              </Link>
              <Key>
                <SpotifyIcon />
              </Key>
            </div>
          </ul>
        </nav>
      ) : (
        <SettingsButton />
      )}
    </header>
  );
}

function MenuItem({ label, path, isSelected }) {
  const className = clsx(
    "inline-flex flex-col font-trump-gothic text-2xl after:h-0.5 after:w-full after:bg-transparent",
    {
      "bg-clip-text text-transparent bg-gradient-to-bl from-orange to-purple after:bg-gradient-to-bl":
        isSelected,
    }
  );

  return (
    <li className="flex items-center">
      <Link href={path}>
        <a className={className}>{label}</a>
      </Link>
    </li>
  );
}

function TextWithKey({ as: Component = "button", keyText, text, ...props }) {
  return (
    <Component className="inline-flex items-center space-x-4" {...props}>
      <Key>{keyText}</Key>
      <span className="uppercase font-trump-gothic text-2xl">{text}</span>
    </Component>
  );
}

function SettingsButton(props) {
  return (
    <button
      className="inline-flex justify-center items-center px-3 h-8 space-x-2 leading-8 text-center rounded-md bg-gray-dark font-semibold text-sm border border-white-4 text-white-80 hover:bg-gray-highlight hover:border-white-10"
      {...props}
    >
      <CogIcon />
      <span>Settings</span>
    </button>
  );
}

function Key(props) {
  return (
    <span
      className="inline-flex justify-center items-center w-8 h-8 leading-8 text-center rounded-md bg-gray-dark font-semibold text-sm border border-white-4 text-white-80"
      {...props}
    />
  );
}
