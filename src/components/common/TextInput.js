import React from 'react'

const TextInput = ({ name, label, type, onChange, value }) => {
  return (
    <div className='logincontainer'>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type={type}
          name={name}
          label={type}
          className="form-control"
          value={value}
          onChange={onChange} />
      </div>
    </div>
  );
};

export default TextInput;