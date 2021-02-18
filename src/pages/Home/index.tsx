import React from 'react';

import MenuBar from '../../components/MenuBar';
import Opportunity from '../../components/Opportunity';

import { Container, Main } from './styles';

const opportunities = [
  {
    videoURL: 'https://www.youtube.com/embed/xNqs_S-zEBY',
    role: 'Full Stack Developer',
    company: 'SpaceX',
    level: 'Pleno',
    locality: 'Remoto',
    contract: 'PJ',
    salary: 3500,
    match: '85%',
  },
  {
    videoURL: 'https://www.youtube.com/embed/xNqs_S-zEBY',
    role: 'Full Stack Developer',
    company: 'SpaceX',
    level: 'Pleno',
    locality: 'Remoto',
    contract: 'PJ',
    salary: 3500,
    match: '85%',
  },
  {
    videoURL: 'https://www.youtube.com/embed/xNqs_S-zEBY',
    role: 'Full Stack Developer',
    company: 'SpaceX',
    level: 'Pleno',
    locality: 'Remoto',
    contract: 'PJ',
    salary: 3500,
    match: '85%',
  },
  {
    videoURL: 'https://www.youtube.com/embed/xNqs_S-zEBY',
    role: 'Full Stack Developer',
    company: 'SpaceX',
    level: 'Pleno',
    locality: 'Remoto',
    contract: 'PJ',
    salary: 3500,
    match: '85%',
  },
  {
    videoURL: 'https://www.youtube.com/embed/xNqs_S-zEBY',
    role: 'Full Stack Developer',
    company: 'SpaceX',
    level: 'Pleno',
    locality: 'Remoto',
    contract: 'PJ',
    salary: 3500,
    match: '85%',
  },
];

export default function Home() {
  return (
    <Container>
      <MenuBar />
      <Main>
        {opportunities.map((opportunity) => (
          <Opportunity
            videoURL={opportunity.videoURL}
            role={opportunity.role}
            company={opportunity.company}
            level={opportunity.level}
            locality={opportunity.locality}
            contract={opportunity.contract}
            salary={opportunity.salary}
            match={opportunity.match}
          />
        ))}
      </Main>
    </Container>
  );
}
