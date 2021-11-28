import React from "react";
import { IntlProvider } from "react-intl";
import "./App.css";
import intlLib from "../../resources/intl";
import AppContent from "../AppContent/AppContent";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  const defaultLocale = "en";

  return (
    <IntlProvider
      locale={defaultLocale}
      defaultLocale={defaultLocale}
      messages={intlLib[defaultLocale]}
    >
      <ThemeProvider theme={theme}>        
        <CssBaseline />
        <AppContent />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
