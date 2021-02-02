import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/just_logo.svg';

import {
  Container,
  MenuIcon,
  MenuIconClose,
  Header,
  Options,
  Option,
  OptionLabel,
  OptionLabelActive,
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
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsVisible(false);
    }
  }, []);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

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
        {isVisible ? (
          <MenuIconClose onClick={handleToggleVisibility} />
        ) : (
          <MenuIcon onClick={handleToggleVisibility} />
        )}
      </Header>

      {isVisible && (
        <>
          <Options>
            {isActive === 1 ? (
              <Option onClick={() => handleSwitchOption(1)}>
                <OpportunitiesIconActive />
                <OptionLabelActive>Oportunidades</OptionLabelActive>
              </Option>
            ) : (
              <Option onClick={() => handleSwitchOption(1)}>
                <OpportunitiesIconActive />
                <OptionLabel>Oportunidades</OptionLabel>
              </Option>
            )}
            {isActive === 2 ? (
              <Option onClick={() => handleSwitchOption(2)}>
                <MyOpportunitiesIconActive />
                <OptionLabelActive>Minhas oportunidades</OptionLabelActive>
              </Option>
            ) : (
              <Option onClick={() => handleSwitchOption(2)}>
                <MyOpportunitiesIcon />
                <OptionLabel>Minhas oportunidades</OptionLabel>
              </Option>
            )}
            {isActive === 3 ? (
              <Option onClick={() => handleSwitchOption(3)}>
                <ProfileIconActive />
                <OptionLabelActive>Perfil</OptionLabelActive>
              </Option>
            ) : (
              <Option onClick={() => handleSwitchOption(3)}>
                <ProfileIcon />
                <OptionLabel>Perfil</OptionLabel>
              </Option>
            )}
          </Options>

          <Footer>
            <Option onClick={handleSignOut}>
              <SignOutIcon />
              <OptionLabel>Sair</OptionLabel>
            </Option>
          </Footer>
        </>
      )}
    </Container>
  );
};

export default MenuBar;
