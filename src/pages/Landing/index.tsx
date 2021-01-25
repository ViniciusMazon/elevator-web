import React from 'react';

import smallLogo from '../../assets/just_logo.svg';
import logo from '../../assets/logo.svg';
import {
  Container,
  Header,
  Content,
  Features,
  FeaturesGroup,
  CheckIcon,
  CompanyIcon,
  TerminalIcon,
  Footer,
} from './styles';

export default function Landing() {
  function handleNavigateToSingIn() {
    return;
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Elevator logo" />
        <button onClick={handleNavigateToSingIn}>Entrar</button>
      </Header>
      <Content>
        <img src={smallLogo} alt="Elevator logo" />
        <h1>Suba para o próximo nível</h1>
        <p>
          O Elevator é uma plataforma de recrutamento para profissionais de
          tecnologia (Desenvolvedores e Designers). Utilizamos um pitch de 1 min
          como principal meio do candidato se apresentar para vaga, essa
          abordagem permite agilizar o recrutamento, e ao mesmo tempo, o
          recrutador consegue avaliar algumas softskills antes mesmo da
          entrevista.
        </p>

        <Features>
          <FeaturesGroup>
            <li>
              <CompanyIcon />
              <p>Empresa</p>
            </li>
            <li>
              <CheckIcon />
              <p>Torna o processo de recrutamento mais transparente</p>
            </li>
            <li>
              <CheckIcon />
              <p>Agiliza a análise dos candidatos</p>
            </li>
            <li>
              <CheckIcon />
              <p>Filtra as propostas</p>
            </li>
          </FeaturesGroup>
          <FeaturesGroup>
            <li>
              <TerminalIcon />
              <p>Desenvolvedores e Designers</p>
            </li>
            <li>
              <CheckIcon />
              <p>Todas propostas possuem o salário no anúncio</p>
            </li>
            <li>
              <CheckIcon />
              <p>Elimina o uso de curriculum</p>
            </li>
            <li>
              <CheckIcon />
              <p>
                Oportunidades condizentes com sua experiência e preferências
              </p>
            </li>
          </FeaturesGroup>
        </Features>
      </Content>
      <Footer>
        <a href="https://unsplash.com/photos/QckxruozjRg">
          Photo by Annie Spratt on Unsplash
        </a>
      </Footer>
    </Container>
  );
}
