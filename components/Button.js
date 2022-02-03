import { forwardRef } from "react";
import clsx from "clsx";

export default forwardRef(function Button(
  { as: Component = "button", className, disabled, ...props },
  ref
) {
  return (
    <Component
      ref={ref}
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
        space-x-2 
        hover:bg-gray-highlight
        hover:border-white/10
        `,
        {
          "text-white": !disabled,
          "text-white/40": disabled,
        },
        className
      )}
      {...props}
    />
  );
});
