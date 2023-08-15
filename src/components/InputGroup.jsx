function InputGroup({
  inputInvalid,
  label,
  id,
  value,
  setValue,
  setTouched,
  type,
  errorMessage,
}) {
  function handleTouch() {
    setTouched(true);
  }
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className={`form-control ${inputInvalid ? "invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        onBlur={handleTouch}
        value={value}
        onChange={handleChange}
        type={type}
        id={id}
      />
      {inputInvalid && <span className="error-text">{errorMessage}</span>}
    </div>
  );
}

export default InputGroup;
