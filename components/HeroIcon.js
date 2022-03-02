import clsx from "clsx";
import * as solidIcons from "@heroicons/react/solid";
import * as outlineIcons from "@heroicons/react/outline";

export default function HeroIcon({
  as: Component = "span",
  className,
  size = "w-5 h-5",
}) {
  return <Component className={clsx(className, size)} />;
}

function createIconProxy(iconCollection) {
  return new Proxy(HeroIcon, {
    get(target, propName) {
      return iconCollection[`${propName}Icon`] ?? target[propName];
    },
  });
}

HeroIcon.Solid = createIconProxy(solidIcons);
HeroIcon.Outline = createIconProxy(outlineIcons);
