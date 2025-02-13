import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = ({ id, label, type, value, onChange, required }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
