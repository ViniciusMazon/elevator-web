import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes/index';

import { AuthProvider } from './context/auth';
import AlertProvider from './context/alert';

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
