import InputGroup from "./InputGroup";
import useInput from "./useInput";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function validateValue(value, length) {
  return value.trim().length >= length;
}

function BasicForm() {
  const {
    value: firstName,
    setValue: setFirstname,
    setInputTouched: setFirstnameTouched,
    enteredValueIsValid: firstnameIsValid,
    inputInvalid: firstnameInputInvalid,
    reset: resetFirstname,
  } = useInput((value) => validateValue(value, 3));
  const {
    value: lastname,
    setValue: setLastname,
    setInputTouched: setLastnameTouched,
    enteredValueIsValid: lastnameIsValid,
    inputInvalid: lastnameIsInvalid,
    reset: resetLastname,
  } = useInput((value) => validateValue(value, 5));

  const {
    value: email,
    setValue: setEmail,
    setInputTouched: setEmailTouched,
    enteredValueIsValid: emailIsValid,
    inputInvalid: emailInputInvalid,
    reset: resetEmail,
  } = useInput((value) => emailRegex.test(value));

  const formIsValid = firstnameIsValid && emailIsValid && lastnameIsValid;

  function submitHandler(e) {
    e.preventDefault();
    if (!formIsValid) {
      setFirstnameTouched(true);
      setLastnameTouched(true);
      setEmailTouched(true);
      return;
    }
    const formData = {
      firstName,
      lastname,
      email,
    };
    console.log(formData);
    resetFirstname();
    resetLastname();
    resetEmail();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <InputGroup
          id="firstname"
          value={firstName}
          setValue={setFirstname}
          setTouched={setFirstnameTouched}
          label="First Name"
          type="text"
          inputInvalid={firstnameInputInvalid}
          errorMessage="Pealse enter a valid name(min 3 characters)!"
        />
        <InputGroup
          id="lastname"
          value={lastname}
          setValue={setLastname}
          setTouched={setLastnameTouched}
          label="Last Name"
          type="text"
          inputInvalid={lastnameIsInvalid}
          errorMessage="Pealse enter a valid last name(min 3 characters)!"
        />
        <InputGroup
          id="email"
          value={email}
          setValue={setEmail}
          setTouched={setEmailTouched}
          label="Your E-mail"
          type="email"
          inputInvalid={emailInputInvalid}
          errorMessage="Pealse enter a valid email!"
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default BasicForm;
