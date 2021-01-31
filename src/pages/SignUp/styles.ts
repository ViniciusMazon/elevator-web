import styled, { keyframes } from 'styled-components';
import { ArrowLeft } from '../../styles/Icons';

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

export const Header = styled.header`
  width: 100%;
  margin-bottom: 120px;

  > img {
    width: 4rem;
    animation: ${neon} 2.5s alternate infinite ease-in-out;
  }
`;

export const Card = styled.form`
  margin: 0 auto;
  background: var(--white);
  border-radius: 6px;
  max-width: 400px;
  padding: 56px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  > h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--black);
    margin-bottom: 28px;
    line-height: 27px;
  }
  button + button {
    margin-top: 30px;
  }
  div + div {
    margin-top: 20px;
  }
`;

export const BackButton = styled.span`
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

  cursor: pointer;

  &:hover {
    background: var(--green-dark);
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  stroke: var(--white);
  stroke-width: 1px;
`;

export const Option = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 280px;
  height: 80px;

  border: 1px solid var(--light-green);
  border-radius: 6px;
  color: var(--light-green);
  font-size: 1.6rem;
  font-weight: 500;

  outline: none;
  cursor: pointer;

  &:hover {
    background: var(--green-dark);
    color: var(--white);
  }
`;

export const PolicyTermGroup = styled.div`
  width: 100%;
  align-self: flex-end;

  display: flex;
  align-items: center;

  > input[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;

    width: 16px;
    height: 16px;
    border: 1px solid var(--neon);
    border-radius: 100%;
    box-shadow: none;

    outline: none;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;

    width: 16px;
    height: 16px;
    border: 1px solid var(--neon);
    background: var(--neon);
    border-radius: 100%;
    box-shadow: none;

    outline: none;
    cursor: pointer;
  }

  > label {
    width: 250px;
    font-size: 1.4rem;
    color: var(--medium-gray);
    padding-left: 9px;

    a {
      font-weight: 500;
      color: var(--main-green);
      text-decoration: none;
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  width: 100%;
  height: 50px;
  background: var(--main-green);
  border-radius: 6px;
  color: var(--white);
  font-weight: 700;
  outline: none;
  margin-top: 30px;

  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: var(--green-dark);
  }
`;
