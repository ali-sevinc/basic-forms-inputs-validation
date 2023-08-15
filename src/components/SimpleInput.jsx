import InputGroup from "./InputGroup";
import useInput from "./useInput";
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function SimpleInput() {
  const {
    value: enteredName,
    setValue: setEnteredName,
    setInputTouched: setNameInputTouched,
    enteredValueIsValid: enteredNameIsValid,
    inputInvalid: nameInputInvalid,
    reset: resetName,
  } = useInput((value) => value.trim().length >= 3);
  const {
    value: enteredEmail,
    setValue: setEnteredEmail,
    setInputTouched: setIsEmailTouched,
    enteredValueIsValid: enteredEmailIsValid,
    inputInvalid: emailInputInvalid,
    reset: resetEmail,
  } = useInput((value) => emailRegex.test(value));

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  function handeSubmit(e) {
    e.preventDefault();

    if (!formIsValid) {
      setNameInputTouched(true);
      setIsEmailTouched(true);
      return;
    }
    const data = {
      enteredName,
      enteredEmail,
    };
    console.log(data);

    resetName();
    resetEmail();
  }

  return (
    <form onSubmit={handeSubmit}>
      <InputGroup
        id="name"
        value={enteredName}
        setValue={setEnteredName}
        setTouched={setNameInputTouched}
        label="Your Name"
        type="text"
        inputInvalid={nameInputInvalid}
        errorMessage="Pealse enter a valid name(min 3 characters)!"
      />

      <InputGroup
        id="email"
        value={enteredEmail}
        setValue={setEnteredEmail}
        setTouched={setIsEmailTouched}
        label="Your E-mail"
        type="email"
        inputInvalid={emailInputInvalid}
        errorMessage="Pealse enter a valid email!"
      />

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
