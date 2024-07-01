import {ButtonTheme, ButtonTypes} from './types';

export const buttonThemes: Record<ButtonTypes, ButtonTheme> = {
  primary: {
    default: {
      background: 'primary',
      backgroundContrast: 'primaryContrast',
      borderWidth: 0,
    },
    disabled: {
      background: 'gray2',
      backgroundContrast: 'gray1',
      borderWidth: 0,
    },
  },
  outline: {
    default: {
      background: 'white',
      backgroundContrast: 'primary',
      borderWidth: 1,
      borderColor: 'primary',
    },
    disabled: {
      background: 'gray4',
      backgroundContrast: 'gray2',
      borderWidth: 0,
    },
  },
};
