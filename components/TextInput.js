import clsx from "lib/clsx";

export default function TextInput({
  as: Component = (props) => <input type="text" {...props} />,
  className,
  ...props
}) {
  return (
    <Component
      className={clsx(
        `
          rounded-md 
          border
          border-white/24
          bg-gray-dark/1 
          px-2
          py-2
          text-sm
          focus:border-white
          focus:outline-none
        `,
        className
      )}
      {...props}
    />
  );
}
