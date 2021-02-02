import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/auth';

import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';

import logo from '../../assets/just_logo.svg';
import {
  Container,
  Header,
  Card,
  RememberGroup,
  SubmitButton,
  Footer,
} from './styles';

export default function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRemembering, setIsRemembering] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    console.log(email, password, isRemembering);
    signIn(email, password);
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>

      <Card onSubmit={handleSubmit}>
        <InputText
          label={'E-mail'}
          placeholder={'email@mail.com'}
          value={email}
          changeValue={setEmail}
        />
        <InputPassword
          label={'Senha'}
          value={password}
          changeValue={setPassword}
        />

        <RememberGroup>
          <input
            type="checkbox"
            id="remember"
            checked={isRemembering}
            onChange={(e) => setIsRemembering(!isRemembering)}
          />
          <label htmlFor="remember">Lembre-se de mim</label>
        </RememberGroup>

        <SubmitButton>Entrar</SubmitButton>
      </Card>

      <Footer>
        <p>
          Não possui uma conta? <Link to="/sign-up/i-am">Registre-se</Link>
        </p>
      </Footer>
    </Container>
  );
}
