import { createContext, useContext, useEffect, useRef, memo } from "react";
import clsx from "lib/clsx";

import Label from "./Label";
import TextInput from "./TextInput";

const FormContext = createContext("");

const Form = memo(function Form({
  children,
  className,
  id,
  focusFirst,
  onSubmit,
}) {
  const rootRef = useRef();
  
  useEffect(() => {
    if (focusFirst) {
      rootRef.current?.elements[0]?.focus();
    }
  }, [focusFirst]);

  return (
    <form className={clsx("", className)} onSubmit={onSubmit} ref={rootRef}>
      <FormContext.Provider value={id}>{children}</FormContext.Provider>
    </form>
  );
});

export default Form;

Form.TextField = memo(function TextField({ label, name, optional, ...props }) {
  const formId = useContext(FormContext);
  const fieldId = `${formId}-${name}`;

  return (
    <div className="flex flex-col space-y-2">
      <Label className="space-x-1" htmlFor={fieldId}>
        <span>{label}</span>
        {optional ? (
          <span className="text-sm text-gray-highlight">(optional)</span>
        ) : null}
      </Label>
      <TextInput id={fieldId} name={name} {...props} />
    </div>
  );
});
