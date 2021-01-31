import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../../assets/just_logo.svg';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Card,
  Option,
} from '../styles';

export default function IAm() {
  const history = useHistory();
  const [iAm, setIAm] = React.useState('');

  function handleNavigateGoBack() {
    history.goBack();
  }

  function handleSelect(isCompany: boolean) {
    isCompany ? setIAm('company') : setIAm('developer-designer');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    history.push(`/sign-up/form/${iAm}`);
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Card onSubmit={handleSubmit}>
        <BackButton onClick={handleNavigateGoBack}>
          <BackIcon />
        </BackButton>
        <Option onClick={() => handleSelect(false)}>Developer/Designer</Option>
        <Option onClick={() => handleSelect(true)}>Empresa</Option>
      </Card>
    </Container>
  );
}
