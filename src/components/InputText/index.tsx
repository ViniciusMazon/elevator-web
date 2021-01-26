import React from 'react';

import { Container, Label } from './styles';

interface InputTextData {
  label: string;
  placeholder: string;
  value: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

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
