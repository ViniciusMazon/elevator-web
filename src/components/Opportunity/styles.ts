import styled, { css } from 'styled-components';
import { Coffee, Location, FileText } from '../../styles/Icons';

export const Container = styled.div`
  width: 28rem;
  height: 380px;

  background: var(--white);
  border-radius: 6px;
  filter: drop-shadow(0px 2px 4px rgba(65, 95, 155, 0.25));

  display: flex;
  flex-direction: column;
  align-items: center;

  > iframe {
    border-radius: 6px 6px 0 0;
  }

  > h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--black);
    margin-top: 16px;
    text-align: center;
  }
  > h2 {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--intermediary-gray);
    margin-top: 4px;
    text-align: center;
  }
  > h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--main-green);
    margin-top: 26px;
    text-align: center;
  }
  > ul {
    display: flex;
    justify-content: center;
    margin-top: 21px;

    li {
      list-style-type: none;
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--soft-dark-gray);
      text-align: center;
    }
  }
  > a {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--medium-gray);
    cursor: pointer;
    text-align: center;
    margin-top: 32px;
  }
`;

export const MatchIndicator = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: var(--main-green);

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -22.5px;
  left: -22.5px;

  @media (max-width: 900px) {
    left: -16.5px;
  }
`;

const iconStyle = css`
  width: 14px;
  height: 14px;
  stroke: 1px;
  color: var(--soft-dark-gray);
  margin-right: 8px;
`;

export const CoffeeIcon = styled(Coffee)`
  ${iconStyle}
`;
export const LocationIcon = styled(Location)`
  ${iconStyle}
`;
export const FileTextIcon = styled(FileText)`
  ${iconStyle}
`;
