import styled from 'styled-components';

export const Container = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;

  > select {
    height: 50px;
    width: 100%;
    border: 1px solid var(--light-green);
    border-radius: 6px;

    outline-color: var(--main-green);
    font-size: 1.6rem;
    color: var(--gray);

    padding: 15px 12px;
  }
`;

export const Label = styled.div`
  font-size: 1.6rem;
  color: var(--gray);
  margin-bottom: 8px;
`;
