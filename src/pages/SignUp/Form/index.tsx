import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

import api from '../../../services/api';

import InputText from '../../../components/InputText';
import InputSelect from '../../../components/InputSelect';
import InputPassword from '../../../components/InputPassword';

import logo from '../../../assets/just_logo.svg';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Card,
  PolicyTermGroup,
  SubmitButton,
} from '../styles';

interface Params {
  whoAmI: string;
}

export default function Form() {
  const history = useHistory();
  const params = useParams() as Params;

  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [cnpj, setCnpj] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('');

  const [agreed, setAgreed] = React.useState(false);

  function handleNavigateGoBack() {
    history.goBack();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;

    let data = {};

    try {
      if (params.whoAmI === 'company') {
        data = {
          name,
          cnpj,
          email,
          password,
        };

        await api.post('/sing-up/company', data);
      } else {
        data = {
          name,
          lastname,
          email,
          password,
          role,
        };

        await api.post('/sing-up/professional', data);
      }
    } catch (err) {
      alert('Ops... ocorreu um erro, tente novamente mais tarde!');
      console.log(err);
    }
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
        <h1>Opa, que legal que você vai se juntar a nós!</h1>
        <InputText
          label={'Nome'}
          value={name}
          changeValue={setName}
          placeholder={
            params.whoAmI === 'company' ? 'Nome da empresa' : 'Qual seu nome?'
          }
        />

        {params.whoAmI === 'company' ? (
          <InputText
            label={'CNPJ'}
            value={cnpj}
            changeValue={setCnpj}
            placeholder={'00.000.000/0000-00'}
          />
        ) : (
          <InputText
            label={'Sobrenome'}
            value={lastname}
            changeValue={setLastname}
            placeholder={'Digite seu sobrenome'}
          />
        )}

        {params.whoAmI === 'developer-designer' && (
          <InputSelect
            label={'Sua especialidade'}
            changeValue={setRole}
            options={[
              { value: 'developer', label: 'Developer' },
              { value: 'designer', label: 'Designer' },
            ]}
          />
        )}

        <InputText
          label={'E-mail'}
          value={email}
          changeValue={setEmail}
          placeholder={'Digite seu melhor e-mail'}
        />

        <InputPassword
          label={'Senha'}
          value={password}
          changeValue={setPassword}
        />

        <PolicyTermGroup>
          <input
            type="checkbox"
            id="PolicyTerm"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label htmlFor="PolicyTerm">
            Concordo com o <Link to="#">Termo de Uso</Link> e as{' '}
            <Link to="#">Políticas de Privacidade</Link>
          </label>
        </PolicyTermGroup>

        <SubmitButton>Enviar</SubmitButton>
      </Card>
    </Container>
  );
}