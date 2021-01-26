import styled, { keyframes } from 'styled-components';

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
  border-radius: 6px 6px 0 0;
  max-width: 400px;
  padding: 56px;

  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 20px;
  }
`;

export const RememberGroup = styled.div`
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
    font-size: 1.4rem;
    color: var(--medium-gray);
    padding-left: 9px;
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

export const Footer = styled.footer`
  margin: 0 auto;
  background: var(--white);
  border-radius: 0 0 6px 6px;
  max-width: 400px;
  padding: 40px 56px;
  border-top: 1px solid var(--light-gray);

  > p {
    font-size: 1.6rem;
    font-weight: 500;
    > a {
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--green-dark);
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
