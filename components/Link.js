import NextLink from "next/link";
import clsx from "clsx";

export default function Link({
  bold,
  children,
  hint,
  href,
  underlined,
  className,
  ...props
}) {
  return (
    <NextLink href={href}>
      <a
        {...props}
        className={clsx(
          "text-white-100",
          { "space-x-1": hint, "font-semibold": bold },
          className
        )}
      >
        {hint === "back" && <span>&larr;</span>}
        <span className={underlined ? "underline" : ""}>{children}</span>
        {hint === "forward" && <span>&rarr;</span>}
      </a>
    </NextLink>
  );
}
