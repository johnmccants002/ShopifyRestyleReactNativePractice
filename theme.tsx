import {createTheme, createBox, createText} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    cardPrimaryBackground: palette.purplePrimary,
    buttonPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    header: {
      fontFamily: 'Helvetica-Bold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,

    },
    subheader: {
      fontFamily: 'Helvetica-SemiBold',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,

    },
    body: {
      fontFamily: 'Helvetica',
      fontSize: 16,
      lineHeight: 24,

    },
  },
});



export type Theme = typeof theme;
// Text Props: variant, color
export const Text = createText<Theme>();

export const Box = createBox<Theme>();
export default theme;