import React from 'react';

import { Container, Label } from './styles';

interface IOption {
  value: string;
  label: string;
}

interface InputSelectProps {
  label: string;
  options: IOption[];
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputSelect = ({ label, options, changeValue }: InputSelectProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <select onChange={(e) => changeValue(e.target.value)}>
        <option hidden>-</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default InputSelect;
