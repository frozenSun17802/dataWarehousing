"use client";
import './globals.css'
import localFont from 'next/font/local'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import RioAppBar from './app-bar';
import RioTheme from './rio-theme';

const RTBasis = localFont({
  src: [
    {
      path: './RTBasis-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './RTBasis-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './RTBasis-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './RTBasis-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ]
})

const rioTheme = createTheme({RioTheme});

const theme = createTheme({
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
    fontFamily: '__RTBasis_b7f8e6, fantasy',
    fontWeightLight: 200,
    fontSize: 16,
    fontWeightRegular: 400,
    body1: {
      lineHeight: 1.3,
      fontWeight: 400,
      fontSize: 16,
      paddingBottom: 8,
      paddingTop: 8,
      fontVariant: 'tabular-nums slashed-zero',
    },
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 48,
      color: '#333333',
      paddingBottom: 8,
      fontVariant: 'tabular-nums slashed-zero',
      fontFeatureSettings: 'ss01',
      fontVariationSettings: 'ss01',
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 32,
      color: '#333333',
      paddingBottom: 8,
      fontVariant: 'tabular-nums slashed-zero',
      fontFeatureSettings: 'ss01',
      fontVariationSettings: 'ss01',
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 24,
      color: '#333333',
      paddingBottom: 8,
      fontVariant: 'tabular-nums slashed-zero',
      fontFeatureSettings: 'ss01',
      fontVariationSettings: 'ss01',
    },
    h4: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2,
      color: '#333333',
      paddingBottom: 8,
      fontVariant: 'tabular-nums slashed-zero',
      fontFeatureSettings: 'ss01',
      fontVariationSettings: 'ss01',
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 18,
      color: '#333333',
      paddingBottom: 8,
      fontVariant: 'tabular-nums slashed-zero',
      fontFeatureSettings: 'ss01',
      fontVariationSettings: 'ss01',
    },
    h6: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 16,
      color: '#333333',
      paddingBottom: 8,
      fontVariant: 'tabular-nums slashed-zero',
      fontFeatureSettings: 'ss01',
      fontVariationSettings: 'ss01',
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
    MuiInputLabel: {
      color: 'primary',
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
  components: {
    MuiInputLabel: {
      defaultProps: {
        fontWeight: 700,
      }
    },
    MuiInput: {
      defaultProps: {
        classes: 'test',
      }
    },
  },
  spacing: 8,
});
console.log(rioTheme);
console.log(theme);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
    <html lang="en">
      {
        <body sx={{ m: 0 }}className={RTBasis.className}>
          <RioAppBar />
            <main>
              {children}
            </main>
        </body>
      }
    </html>
   </ThemeProvider>
  )
}
