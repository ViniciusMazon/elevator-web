import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/just_logo.svg';

import {
  Container,
  Header,
  Options,
  Footer,
  OpportunitiesIcon,
  MyOpportunitiesIcon,
  ProfileIcon,
  OpportunitiesIconActive,
  MyOpportunitiesIconActive,
  ProfileIconActive,
  SignOutIcon,
} from './styles';

const MenuBar: React.FC = () => {
  const history = useHistory();
  const [isActive, setIsActive] = React.useState(1);

  function handleSwitchOption(optionNumber: number) {
    setIsActive(optionNumber);
    switch (optionNumber) {
      case 1:
        history.push('/');
        break;
      case 2:
        history.push('/');
        break;
      case 3:
        history.push('/');
        break;
      default:
        history.push('/');
        break;
    }
  }

  function handleSignOut() {
    console.log('signout');
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>

      <Options>
        {isActive === 1 ? (
          <OpportunitiesIconActive onClick={() => handleSwitchOption(1)} />
        ) : (
          <OpportunitiesIcon onClick={() => handleSwitchOption(1)} />
        )}
        {isActive === 2 ? (
          <MyOpportunitiesIconActive onClick={() => handleSwitchOption(2)} />
        ) : (
          <MyOpportunitiesIcon onClick={() => handleSwitchOption(2)} />
        )}
        {isActive === 3 ? (
          <ProfileIconActive onClick={() => handleSwitchOption(3)} />
        ) : (
          <ProfileIcon onClick={() => handleSwitchOption(3)} />
        )}
      </Options>

      <Footer>
        <SignOutIcon onClick={handleSignOut} />
      </Footer>
    </Container>
  );
};

export default MenuBar;
