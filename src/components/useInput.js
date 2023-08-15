import { useReducer } from "react";

const initialState = {
  value: "",
  inputTouched: false,
};

function reduderFn(state, action) {
  switch (action.type) {
    case "input/setValue":
      return {
        ...state,
        value: action.payload,
      };
    case "input/setTouched":
      return {
        ...state,
        inputTouched: action.payload,
      };
    case "input/reset":
      return initialState;

    default:
      throw new Error("Unknown Action");
  }
}

function useInput(validateFn) {
  const [state, dispatch] = useReducer(reduderFn, initialState);
  const { value, inputTouched } = state;

  const enteredValueIsValid = validateFn(value);
  const inputInvalid = inputTouched && !enteredValueIsValid;

  function setValue(data) {
    dispatch({ type: "input/setValue", payload: data });
  }

  function setInputTouched(data) {
    dispatch({ type: "input/setTouched", payload: data });
  }

  function reset() {
    dispatch({ type: "input/reset" });
  }

  return {
    value,
    setValue,
    setInputTouched,
    enteredValueIsValid,
    inputInvalid,
    reset,
  };
}
export default useInput;
