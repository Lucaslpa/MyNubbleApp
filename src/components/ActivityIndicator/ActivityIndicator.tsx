import React from 'react';
import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useTheme} from '@shopify/restyle';

import {Colors, Theme} from '../../theme';

interface Props extends Omit<RNActivityIndicatorProps, 'color'> {
  color: Colors;
}

export function ActivityIndicator({color, ...props}: Props) {
  const theme = useTheme<Theme>();
  return <RNActivityIndicator color={theme.colors[color]} {...props} />;
}
