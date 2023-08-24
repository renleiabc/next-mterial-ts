import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { darkScrollbar } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // background: '#f0f0f0',
    background: {
      default: '#e4f0e2'
    },
    background: {
      paper: '#f0f0f0'
    },
    primary: {
      main: '#fff'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar({
            thumb: 'rgba(144, 147, 153,0.3)',
            track: '#f0f0f0'
          }),
          color: '#000',
          backgroundColor: '#f0f0f0',
          '& h1': {
            color: 'black'
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa'
          })
        })
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: '#000',
    background: {
      default: '#e4f0e2'
    },
    background: {
      paper: '#000'
    },
    primary: {
      main: '#000'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar({
            thumb: 'rgba(144, 147, 153,0.3)',
            track: '#000'
          }),
          color: 'darkred',
          backgroundColor: '#000',
          '& h1': {
            color: 'black'
          }
        }
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === 'info' && {
              backgroundColor: '#60a5fa'
            })
          })
        }
      }
    }
  }
});
