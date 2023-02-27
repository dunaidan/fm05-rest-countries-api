import { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey, grey, red } from '@mui/material/colors';

const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export function ToggleColorModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: {
                main: grey[600],
              },
              secondary: {
                main: grey[50],
              },
              divider: grey[200],
              text: {
                primary: blueGrey[800],
                secondary: blueGrey[800],
                hint: '#121212'
              },
              background: {
                default: grey[50],
                paper: '#fff',
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: grey[500]
              },
              secondary: {
                main: blueGrey[900]
              },
              divider: blueGrey[700],
              background: {
                default: blueGrey[900],
                paper: blueGrey[900],
              },
              text: {
                primary: '#fff',
                secondary: grey[300],
              },
            }),
        },
        typography: {
          fontFamily: ['Nunito Sans', 'sans-serif'],
        }
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeContext;