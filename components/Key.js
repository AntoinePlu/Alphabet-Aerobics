import clsx from "clsx";

export default function Key({ disabled, ...props }) {
  return (
    <span
      className={clsx(
        `
        box
        inline-flex
        justify-center
        items-center
        min-w-8
        h-8
        leading-8
        rounded-md
        font-semibold
        text-sm
        `,
        {
          "text-white-100": !disabled,
          "text-white-40": disabled,
        }
      )}
      {...props}
    />
  );
}
