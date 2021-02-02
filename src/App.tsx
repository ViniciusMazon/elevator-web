import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes/index';

import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
