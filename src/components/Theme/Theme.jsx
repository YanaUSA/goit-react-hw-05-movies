import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    text: '#2a2a2a',
    background: 'azure',
    primary: '#fff',
    secondary: '#fff',
    accent: '#fff',
  },

  space: [0, 2, 4, 8, 16, 32],

  fonts: ['sans-serif', 'Roboto'],

  fontSizes: {
    sm: 12,
    m: 14,
    l: 16,
    xl: 22,
  },

  fontWeigthts: {
    normal: '400',
    bold: '700',
  },

  lineHeights: {},

  breakPoints: {
    mobile: '450px',
    tab: '768px',
    pc: '1200px',
  },

  main: {
    background: 'azure',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
