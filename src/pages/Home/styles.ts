import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 70px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  margin: 90px;
  display: flex;
  flex-wrap: wrap;

  div{
    margin-right: 50px;
  }
`;
