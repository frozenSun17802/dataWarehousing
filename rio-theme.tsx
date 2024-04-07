import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#580720',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ae002f',
    },
    text: {
      primary: '#4d4d4d',
      secondary: '#757575',
      hint: '#2a00ff',
      disabled: '#666666',
    },
    background: {
      default: '#f8f8f9',
      paper: '#ffffff',
    },
    success: {
      main: '#007461',
      color: '#ffffff',
    },
    error: {
      main: '#ca2320',
    },
    info: {
      main: '#1a6ad6',
    },
    warning: {
      main: '#bf4d00',
    },
  },
  typography: {
    fontFamily: '"RT Basis", fantasy',
    fontWeightLight: 200,
    fontSize: 16,
    fontWeightRegular: 400,
    body1: {
      lineHeight: 1.3,
      fontWeight: 400,
      fontSize: 16,
      paddingBottom: 8,
      paddingTop: 8,
    },
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 48,
      color: '#4d4d4d',
      paddingBottom: 8,
      fontVariant: 'tabular-nums',
      fontFeatureSettings: 'ss01',
      fontVariationSettings: 'ss01',
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 32,
      color: '#4d4d4d',
      paddingBottom: 8,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 24,
      color: '#4d4d4d',
      paddingBottom: 8,
    },
    h4: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2,
      color: '#4d4d4d',
      paddingBottom: 8,
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 18,
      color: '#4d4d4d',
      paddingBottom: 8,
    },
    h6: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 16,
      color: '#4d4d4d',
      paddingBottom: 8,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.2,
      fontSize: 16,
      color: '#4d4d4d',
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: 1.2,
      fontSize: 12.8,
      color: '#4d4d4d',
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.4,
      textTransform: 'none',
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.2,
      paddingTop: 8,
      paddingBottom: 8,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.2,
      paddingBottom: 8,
      paddingTop: 8,
      letterSpacing: 0.24,
    },
    overline: {
      fontSize: 12,
      lineHeight: 1.2,
      letterSpacing: 0.5,
      fontWeight: 500,
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
};