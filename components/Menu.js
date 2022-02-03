import clsx from "clsx";
import Link from "./Link";
import CheckPlainIcon from "./icons/CheckPlainIcon";

export default function Menu({ children, className, ...props }) {
  return (
    <ul className={clsx("box py-2 space-y-1", className)} {...props}>
      {children}
    </ul>
  );
}

Menu.Item = function MenuItem({
  children,
  className,
  href,
  iconLeft,
  iconRight,
  selected,
  ...props
}) {
  return (
    <li {...props}>
      <Link
        className={clsx(
          "flex items-center space-x-2 rounded-md px-3 py-2 transition hover:bg-gray-mid",
          { "bg-gray-mid": selected },
          className
        )}
        href={href}
      >
        {iconLeft && iconLeft()}
        <span className="flex-1">{children}</span>
        {selected ? <CheckPlainIcon /> : iconRight && iconRight()}
      </Link>
    </li>
  );
};
