import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import * as Yup from 'yup';

import api from '../../../services/api';
import { useAlert } from '../../../context/alert';

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
  const { setAlert } = useAlert();

  const [isSpinning, setIsSpinning] = React.useState(false);

  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [cnpj, setCnpj] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('');

  const [agreed, setAgreed] = React.useState(false);

  const singUpProfessionalSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(25),
    lastname: Yup.string().required().min(3).max(25),
    role: Yup.string().required(),
    email: Yup.string().required().min(3).max(25),
    password: Yup.string().required().min(8).max(25),
  });

  const singUpCompanySchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(25),
    cnpj: Yup.string().required().min(18).max(18),
    role: Yup.string().required(),
    email: Yup.string().required().min(3).max(25),
    password: Yup.string().required().min(8).max(25),
  });

  function handleNavigateGoBack() {
    history.goBack();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) {
      setAlert({
        type: 'warning',
        message:
          'Você precisa aceitar o Termo de Uso e as Políticas de Privacidade antes de continuar',
      });
      return;
    }

    let data = {};
    let isValid = false;
    let response;
    setIsSpinning(true);

    try {
      if (params.whoAmI === 'company') {
        data = {
          name,
          cnpj,
          email,
          password,
        };

        isValid = await singUpCompanySchema.isValid(data);
        if (!isValid) {
          setAlert({
            type: 'warning',
            message: 'Verifique as informações inseridas',
          });
          setIsSpinning(false);
          return;
        }
        response = await api.post('/sing-up/company', data);
      } else {
        data = {
          name,
          lastname,
          email,
          password,
          role,
        };
        isValid = await singUpProfessionalSchema.isValid(data);
        if (!isValid) {
          setAlert({
            type: 'warning',
            message: 'Verifique as informações inseridas',
          });
          setIsSpinning(false);
          return;
        }
        response = await api.post('/sing-up/professional', data);
      }

      if (response.status === 201) {
        setAlert({
          type: 'success',
          message: 'Cadastro efetuado com sucesso!',
        });
      }
      setIsSpinning(false);
    } catch (err) {
      setAlert({
        type: 'error',
        message: 'Ops... ocorreu um erro, tente novamente mais tarde!',
      });
      setIsSpinning(false);
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

        {isSpinning ? (
          <BounceLoader
            size={50}
            color={'#71CCA6'}
            css={'margin: 30px auto 0 auto'}
            loading={isSpinning}
          />
        ) : (
          <SubmitButton>'Enviar'</SubmitButton>
        )}
      </Card>
    </Container>
  );
}
