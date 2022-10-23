import { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  // console.log('label:', label);
  // console.log('inputProps: ', { ...inputProps }); //
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus} //포커스 해제
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()} // focus=true
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
