import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { BounceLoader } from 'react-spinners';

import { useAuth } from '../../context/auth';
import { useAlert } from '../../context/alert';

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
  const { setAlert } = useAlert();

  const [isSpinning, setIsSpinning] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRemembering, setIsRemembering] = React.useState(false);

  const singInSchema = Yup.object().shape({
    email: Yup.string().required().min(3).max(25),
    password: Yup.string().required().min(8).max(25),
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      setAlert({
        type: 'error',
        message: 'Informe seu email e senha',
      });
      return;
    }

    setIsSpinning(true);
    const isValid = await singInSchema.isValid({ email, password });
    if (!isValid) {
      setAlert({
        type: 'warning',
        message: 'Verifique as informações inseridas',
      });
      setIsSpinning(false);
      return;
    }

    const isCorrect = await signIn(email, password);
    if (!isCorrect) {
      setAlert({
        type: 'error',
        message: 'Usuário ou senha inválidos',
      });
    }
    setIsSpinning(false);
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

        {isSpinning ? (
          <BounceLoader
            size={50}
            color={'#71CCA6'}
            css={'margin: 30px auto 0 auto'}
            loading={isSpinning}
          />
        ) : (
          <SubmitButton>'Entrar'</SubmitButton>
        )}
      </Card>

      <Footer>
        <p>
          Não possui uma conta? <Link to="/sign-up/i-am">Registre-se</Link>
        </p>
      </Footer>
    </Container>
  );
}
