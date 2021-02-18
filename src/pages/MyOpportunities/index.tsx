import React from 'react';

import MenuBar from '../../components/MenuBar';
import Opportunity from '../../components/Opportunity';
import { IOpportunityData } from '../../components/Opportunity';

import { Container, Main } from './styles';

export default function MyOpportunities() {
  const [opportunities, setOpportunities] = React.useState<IOpportunityData[]>(
    []
  );

  return (
    <Container>
      <MenuBar />
      <Main>
        {opportunities.length === 0 ? (
          <h1>Você ainda não aplicou para nenhuma oportunidade</h1>
        ) : (
          opportunities.map((opportunity: IOpportunityData) => (
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
          ))
        )}
      </Main>
    </Container>
  );
}
