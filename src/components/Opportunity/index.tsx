import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  MatchIndicator,
  CoffeeIcon,
  LocationIcon,
  FileTextIcon,
} from './styles';

export interface IOpportunityData {
  videoURL: string;
  role: string;
  company: string;
  level: string;
  locality: string;
  contract: string;
  salary: number;
  match: string;
}

const Opportunity = ({
  videoURL,
  role,
  company,
  level,
  locality,
  contract,
  salary,
  match,
}: IOpportunityData) => {
  return (
    <Container>
      <MatchIndicator>{match}</MatchIndicator>

      <iframe
        title={'Opportunity video'}
        height={161}
        width={280}
        src={videoURL}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h1>{role}</h1>
      <h2>{company}</h2>

      <ul>
        <li>
          <CoffeeIcon />
          {level}
        </li>
        <li>
          <LocationIcon />
          {locality}
        </li>
        <li>
          <FileTextIcon />
          {contract}
        </li>
      </ul>

      <h3>{`R$ ${salary},00`}</h3>

      <Link to="#">Ler descrição</Link>
    </Container>
  );
};

export default Opportunity;
