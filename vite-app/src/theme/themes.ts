import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { colors, shadows, transitions } from './variables';

// Shared tokens used by both themes
const base: Partial<ThemeOptions> = {
  shape: { borderRadius: 12 },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '10px 22px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: shadows.md,
          transition: transitions.default,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
};

export const lightTheme = createTheme(
  Object.assign({}, base, {
    palette: {
      mode: 'light',
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      background: { default: colors.bgLight, paper: colors.bgWhite },
      text: { primary: colors.textDark, secondary: colors.textLight },
    },
    typography: {
      fontFamily: ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      button: { fontWeight: 600 },
    },
  })
);

export const darkTheme = createTheme(
  Object.assign({}, base, {
    palette: {
      mode: 'dark',
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      background: { default: '#0b0b0d', paper: '#0f1013' },
      text: { primary: '#e6e6e9', secondary: '#bfc3c8' },
      divider: 'rgba(255,255,255,0.06)',
    },
    typography: {
      fontFamily: ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      h1: { fontWeight: 800, color: '#fff' },
      h2: { fontWeight: 700, color: '#fff' },
      button: { fontWeight: 600 },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.04)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: '#0f1013',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
            border: '1px solid rgba(255,255,255,0.04)',
          },
        },
      },
    },
  })
);

export default { lightTheme, darkTheme };
