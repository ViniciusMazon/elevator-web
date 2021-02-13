import styled, { css } from 'styled-components';
import { Eye, EyeOff } from '../../styles/Icons';

export const Container = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;

  > input {
    height: 50px;
    width: 100%;
    border: 1px solid var(--light-green);
    border-radius: 6px;

    outline-color: var(--main-green);
    font-size: 1.6rem;
    color: var(--gray);

    padding: 15px 12px;
  }

  .icon {
    position: relative;
    top: -31px;
    right: -88%;
    cursor: pointer;
  }
`;

export const Label = styled.div`
  font-size: 1.6rem;
  color: var(--gray);
  margin-bottom: 8px;
`;

const cssIcon = css`
  height: 16px;
  width: 16px;
  stroke: var(--light-green);
`;

export const EyeIcon = styled(Eye)`
  ${cssIcon}
`;

export const EyeOffIcon = styled(EyeOff)`
  ${cssIcon}
`;
