import { createTheme } from '@mui/material/styles';
import { colors } from './variables';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.bgLight,
      paper: colors.bgWhite,
    },
    text: {
      primary: colors.textDark,
      secondary: colors.textLight,
    },
  },
  typography: {
    fontFamily: ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
