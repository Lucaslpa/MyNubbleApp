import {createTheme} from '@shopify/restyle';

const palette = {
  greenPrimary: '#074C4E',
  greenLightPrimary: '#EAF6F6',
  orangeSecondary: '#F86F2D',
  orangeLightSecondary: '#FAE6DD',
  black: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  white: '#FFFFFF',
  succes: '#4ABC86',
  successLight: '#D8FFEC',
  error: '#EA3838',
  errorLight: '#FBECEC',
};

export const theme = createTheme({
  colors: {
    ...palette,
    background: palette.white,
    backgroundContrast: palette.black,
    primary: palette.greenPrimary,
    primaryLight: palette.greenLightPrimary,
    secondary: palette.orangeSecondary,
    secondaryLight: palette.orangeLightSecondary,
    primaryContrast: palette.white,
    secondaryContrast: palette.white,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;

export type Colors = keyof Theme['colors'];
