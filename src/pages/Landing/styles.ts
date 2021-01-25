import styled, { css, keyframes } from 'styled-components';
import { CheckCircle, Terminal, TrendingUp } from '../../styles/Icons';

import backgroundImage from '../../assets/background.png';

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
  padding: 44px 100px 0 100px;

  @media (max-width: 900px) {
    background: url(${backgroundImage}) no-repeat center fixed;
    padding: 20px 20px 0 20px;
    height: fit-content;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 88px;

  > img {
    width: 15rem;
  }
  > button {
    width: 10rem;
    height: 34px;
    border: 1px solid var(--green);
    border-radius: 6px;
    font: 1rem 500 'Montserrat', sans-serif;
    color: var(--green);
    cursor: pointer;
    outline: none;

    &:hover {
      background: var(--main-green);
      color: var(--white);
      transition: background 0.5s;
    }
  }
`;

const neon = keyframes`
 from {
    filter: drop-shadow(0 0 0 var(--neon));
  }
  to {
    filter: drop-shadow(0 0 15px var(--neon));
  }
`;

export const Content = styled.article`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > img {
    width: 18rem;
    animation: ${neon} 2.5s alternate infinite ease-in-out;
  }

  > h1 {
    font-size: 2.5rem;
  }

  > p {
    width: 80%;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    line-height: 195.4%;
    color: var(--white);
    text-align: center;
  }

  @media (max-width: 900px) {
    img {
      margin-bottom: 80px;
    }
    p {
      width: 100%;
    }
  }
`;

export const Features = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ul + ul {
    margin-left: 30px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 70px;
    align-items: center;

    ul + ul {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`;

export const FeaturesGroup = styled.ul`
  max-width: 506px;

  li {
    display: flex;

    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 28.38px;
      color: var(--white);
    }
    list-style: none;
    margin-bottom: 15px;

    &:nth-child(1) {
      > p {
        font-weight: 700;
      }
      margin-bottom: 20px;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;

  > a {
    color: var(--white);
    font-size: 1rem;
  }
`;

const iconStyle = css`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  stroke: var(--main-green);
  margin-right: 2.4rem;
`;

export const CheckIcon = styled(CheckCircle)`
  ${iconStyle}
`;

export const TerminalIcon = styled(Terminal)`
  ${iconStyle}
  stroke: var(--white);
  stroke-width: 2px;
`;

export const CompanyIcon = styled(TrendingUp)`
  ${iconStyle}
  stroke: var(--white);
  stroke-width: 2px;
`;
