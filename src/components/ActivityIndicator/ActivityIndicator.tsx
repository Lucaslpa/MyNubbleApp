import React from 'react';
import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {Colors, Theme} from '../../theme';
import {useTheme} from '@shopify/restyle';

interface Props extends Omit<RNActivityIndicatorProps, 'color'> {
  color: Colors;
}

export function ActivityIndicator({color, ...props}: Props) {
  const theme = useTheme<Theme>();
  return <RNActivityIndicator color={theme.colors[color]} {...props} />;
}
