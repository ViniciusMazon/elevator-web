import React from 'react';

import { Container, Label, EyeIcon, EyeOffIcon } from './styles';

interface InputPasswordProps {
  label: string;
  value: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputPassword = ({ label, value, changeValue }: InputPasswordProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <Container>
      <Label>{label}</Label>
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder={'● ● ● ● ● ● ● ●'}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
      {isVisible ? (
        <EyeOffIcon className="icon" onClick={toggleVisibility} />
      ) : (
        <EyeIcon className="icon" onClick={toggleVisibility} />
      )}
    </Container>
  );
};

export default InputPassword;
