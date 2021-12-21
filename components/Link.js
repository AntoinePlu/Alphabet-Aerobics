import NextLink from "next/link";
import clsx from "clsx";

const DEFAULT_CLASSNAME = "space-x-1";

export default function Link({
  children,
  hint,
  href,
  noUnderline,
  className,
  ...props
}) {
  const linkClassName = clsx(DEFAULT_CLASSNAME, className);
  return (
    <NextLink href={href}>
      <a {...props} className={linkClassName}>
        {hint === "back" && <span>&larr;</span>}
        <span className={noUnderline || "underline"}>{children}</span>
        {hint === "forward" && <span>&rarr;</span>}
      </a>
    </NextLink>
  );
}
