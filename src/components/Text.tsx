import {createText} from '@shopify/restyle';
import React from 'react';
import {TextStyle} from 'react-native';
import {Theme} from '../theme';

const RTText = createText<Theme>();
type RTTextProps = React.ComponentProps<typeof RTText>;

interface TextProps extends RTTextProps {
  type?: TextTypes;
  bold?: boolean;
  italic?: boolean;
}

export const Text = ({
  children,
  style,
  type = 'paragraphMedium',
  ...rest
}: TextProps) => {
  const fontFamily = getFontFamily({
    bold: rest.bold,
    italic: rest.italic,
    type,
  });
  return (
    <RTText
      color="backgroundContrast"
      {...rest}
      style={[$fontSizes[type], style, {fontFamily}]}>
      {children}
    </RTText>
  );
};

const getFontFamily = ({bold, italic, type}: TextProps) => {
  const headings = ['headingLarge', 'headingMedium', 'headingSmall'];

  if (headings.includes(type!)) {
    if (italic) {
      return $fontFamily.boldItalic;
    }
    return $fontFamily.bold;
  }

  if (bold && italic) {
    return $fontFamily.boldItalic;
  }

  if (bold) {
    return $fontFamily.bold;
  }

  if (italic) {
    return $fontFamily.italic;
  }

  return $fontFamily.regular;
};

type TextTypes =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextTypes, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
