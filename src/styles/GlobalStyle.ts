import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--title);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
  }
  html {
    background: var(--white);
  }
  :root {
    font-size: 60%;
    --white: #FFF;
    --light-gray: #DDD;
    --light-green: #93E1C1;
    --green: #94F2CB;
    --green-dark: #71CCA6;
    --main-green: #57E1A7;
    --gray: #383838;
    --neon: #71cca6;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
