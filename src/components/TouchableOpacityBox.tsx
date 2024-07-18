import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  createRestyleComponent,
  layout,
  border,
  backgroundColor,
  spacing,
  spacingShorthand,
  SpacingProps,
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '../theme';

export type TouchableOpacityBoxProps = TouchableOpacityProps &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [layout, border, backgroundColor, spacing, spacingShorthand],
  TouchableOpacity,
);
