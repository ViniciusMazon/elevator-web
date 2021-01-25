import React from 'react';

interface InputTextData {
  label: string;
  placeholder: string;
}

import { Container, Label } from './styles';

const InputText = ({ label, placeholder }: InputTextData) => {
  return (
    <Container>
      <Label>{label}</Label>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
};

export default InputText;
