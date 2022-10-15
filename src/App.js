import React, { Fragment, useState, useEffect } from 'react'
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from './contexts/theme';
import 'remixicon/fonts/remixicon.css'
import { ThemeProvider } from 'styled-components';

const App = () => {

  return (
    		<AuthProvider>	
			<GlobalStyle />
				<RoutesApp />
    		</AuthProvider>
  );
};

export default App;