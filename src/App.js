import React from 'react'
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
    </ AuthProvider>
  );
};

export default App;