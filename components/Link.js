import { forwardRef } from "react";
import NextLink from "next/link";
import clsx from "clsx";

import Button from "./Button";

export default function Link({
  as: Component = "a",
  children,
  href,
  className,
  ...props
}) {
  return (
    <NextLink passHref href={String(href)}>
      <Component {...props} className={clsx("text-white", className)}>
        {children}
      </Component>
    </NextLink>
  );
}

Link.Button = function LinkButton(props) {
  return (
    <Link
      as={forwardRef((linkProps, ref) => (
        <Button ref={ref} as="a" {...linkProps} />
      ))}
      {...props}
    />
  );
};
