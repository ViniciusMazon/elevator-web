import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--title);
  }
  html, body, #root {
    height: 100vh;
    width: 100vw;
    height: 100%;
    width: 100%;
  }
  *, button, input, select {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }
  html {
    background: var(--white);
  }
  :root {
    font-size: 60%;
    --white: #FFF;
    --black: #000;
    --light-gray: #DDD;
    --light-green: #93E1C1;
    --green: #94F2CB;
    --green-dark: #71CCA6;
    --main-green: #57E1A7;
    --gray: #383838;
    --medium-gray: #666666;
    --dark-gray: #515151;
    --dark-gray-transparency: rgba(81,81,81,0.92);
    --neon: #71cca6;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
