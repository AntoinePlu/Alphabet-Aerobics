import clsx from "clsx";
import Link from "./Link";

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
    <li
      className={clsx(
        "flex items-center space-x-2 rounded-md px-3 py-2 transition hover:bg-gray-mid",
        { "bg-gray-mid": selected },
        className
      )}
      {...props}
    >
      {iconLeft && iconLeft()}
      <Link className="flex-1" href={href}>
        {children}
      </Link>
      {iconRight && iconRight()}
    </li>
  );
};
