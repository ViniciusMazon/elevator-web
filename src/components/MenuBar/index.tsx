import React from 'react';

import logo from '../../assets/just_logo.svg';

import {
  Container,
  Header,
  Options,
  Footer,
  OpportunitiesIcon,
  MyOpportunitiesIcon,
  ProfileIcon,
  SignOutIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>

      <Options>
        <OpportunitiesIcon />
        <MyOpportunitiesIcon />
        <ProfileIcon />
      </Options>

      <Footer>
        <SignOutIcon />
      </Footer>
    </Container>
  );
};

export default MenuBar;
