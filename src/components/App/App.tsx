import React from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import intlLib from '../../resources/intl'
import AppContent from '../AppContent/AppContent';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const defaultLocale = 'en'

  return (
    <IntlProvider
      locale={defaultLocale}
      defaultLocale={defaultLocale}
      messages={intlLib[defaultLocale]}
    >
      <CssBaseline />
      <AppContent />
    </IntlProvider>
  );
}

export default App;