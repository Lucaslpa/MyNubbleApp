import React from 'react';
import {EyesOffIcon} from '../../assets/icons/EyesOff';
import {EyesOnIcon} from '../../assets/icons/EyesOn';
import {Colors} from '../../theme';
import {useAppTheme} from '../../hooks/useTheme';

interface Props {
  name: keyof typeof IconRegistry;
  size?: number;
  color?: Colors;
}

export function Icon({name, size, color = 'backgroundContrast'}: Props) {
  const colors = useAppTheme().colors;
  const SVGIcon = IconRegistry[name];
  return <SVGIcon size={size} color={colors[color]} />;
}

const IconRegistry = {
  eyesOn: EyesOnIcon,
  eyesOff: EyesOffIcon,
};
