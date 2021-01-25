import React from 'react';

interface InputTextData {
  label: string;
  placeholder: string;
  value: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

import { Container, Label } from './styles';

const InputText = ({
  label,
  placeholder,
  value,
  changeValue,
}: InputTextData) => {
  return (
    <Container>
      <Label>{label}</Label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </Container>
  );
};

export default InputText;
