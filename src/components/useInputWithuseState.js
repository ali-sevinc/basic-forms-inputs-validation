import { useState } from "react";

function useInput(validateFn) {
  const [value, setValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const enteredValueIsValid = validateFn(value);

  const inputInvalid = isInputTouched && !enteredValueIsValid;

  function reset() {
    setValue("");
    setIsInputTouched(false);
  }

  return {
    value,
    setValue,
    setIsInputTouched,
    enteredValueIsValid,
    inputInvalid,
    reset,
  };
}
export default useInput;
