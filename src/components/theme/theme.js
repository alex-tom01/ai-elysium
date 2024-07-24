import { createTheme } from '@mui/material/styles';

const morningTheme  = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#E5D4FF',
    },
    primaryText: {
      main: '#000',
    },
    secondaryText: {
      main: '#E5D4FF',
    },
    bg: {
      // main: '#D0A2F7'
      main: 'red'
    },
    bgImage: {
      main: `linear-gradient(red, grey)`,
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  custom: {
    name: 'morning',
  },
});

const eveningTheme  = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#DBAFA0',
    },
    secondary: {
      main: '#BB8493',
    },
    primaryText: {
      main: '#DBAFA0',
    },
    secondaryText: {
      main: '#BB8493',
    },
    bg: {
      // main: '#704264'
      main: 'red'
    },
    bgImage: {
      main: `linear-gradient(red, grey)`,
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  custom: {
    name: 'evening',
  },
}); 

const nightTheme  = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#04293A',
    },
    primaryText: {
      main: '#fff',
    },
    secondaryText: {
      main: '#04293A',
    },
    bg: {
      // main: '#041C32',
      main: 'red'
    },
    bgImage: {
      main: `linear-gradient(red, grey)`,
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  custom: {
    name: 'night',
  },
});

export { morningTheme, eveningTheme, nightTheme };