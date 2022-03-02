import { createContext, useContext, useEffect, useRef, useState } from "react";
import clsx from "lib/clsx";

import Label from "./Label";
import TextInput from "./TextInput";

const FormContext = createContext("");

export default function Form({
  children,
  className,
  id,
  focusFirst,
  onSubmit,
}) {
  const rootRef = useRef();
  useEffect(() => {
    if (focusFirst) {
      rootRef.current?.elements[0].focus();
    }
  }, []);

  return (
    <form className={clsx("", className)} onSubmit={onSubmit} ref={rootRef}>
      <FormContext.Provider value={id}>{children}</FormContext.Provider>
    </form>
  );
}

Form.TextField = function TextField({ label, name, optional, ...props }) {
  const formId = useContext(FormContext);

  return (
    <div className="flex flex-col space-y-2">
      <Label className="space-x-1" htmlFor={`${formId}-${name}`}>
        <span>{label}</span>
        {optional ? (
          <span className="text-sm text-gray-highlight">(optional)</span>
        ) : null}
      </Label>
      <TextInput id={`${formId}-${name}`} name={name} {...props} />
    </div>
  );
};
