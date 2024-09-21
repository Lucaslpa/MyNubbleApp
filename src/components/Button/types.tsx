import {Colors} from '../../theme';
import {TouchableOpacityBoxProps} from '../TouchableOpacityBox';

interface theme {
  background: Colors;
  backgroundContrast: Colors;
  borderWidth: number;
  borderColor?: Colors;
}
export interface ButtonTheme {
  default: theme;
  disabled: theme;
}

export type ButtonTypes = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  loading?: boolean;
  text: string;
  type: ButtonTypes;
  disabled?: boolean;
  onPress?: () => void;
}
