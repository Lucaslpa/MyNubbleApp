import {Colors} from '../../theme';
import {TouchableOpacityBoxProps} from '../TouchableOpacityBox';

export interface ButtonTheme {
  background: Colors;
  backgroundContrast: Colors;
  borderWidth: number;
  borderColor?: Colors;
}

export type ButtonTypes = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  loading?: boolean;
  text: string;
  buttonType: ButtonTypes;
}
