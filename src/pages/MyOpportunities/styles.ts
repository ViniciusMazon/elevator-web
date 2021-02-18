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

  > h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--main-green);
    margin-top: 26px;
    text-align: center;
  }

  div {
    margin-right: 50px;
  }
`;
