import clsx from "lib/clsx";

export default function Label({ className, ...props }) {
  return <label className={clsx("", className)} {...props} />;
}
