import {ButtonTheme, ButtonTypes} from './types';

export const buttonThemes: Record<ButtonTypes, ButtonTheme> = {
  primary: {
    background: 'primary',
    backgroundContrast: 'primaryContrast',
    borderWidth: 0,
  },
  outline: {
    background: 'white',
    backgroundContrast: 'primary',
    borderWidth: 1,
    borderColor: 'primary',
  },
};
