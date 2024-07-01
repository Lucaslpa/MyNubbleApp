import React from 'react';
import {Text} from '../Text';

import {ActivityIndicator} from 'react-native';
import {TouchableOpacityBox} from '../TouchableOpacityBox';
import {ButtonProps} from './types';
import {buttonThemes} from './theme';

export function Button({loading, text, buttonType}: ButtonProps) {
  const theme = buttonThemes[buttonType];
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      backgroundColor={theme.background}
      borderWidth={theme.borderWidth}
      borderColor={theme.borderColor}>
      {!loading ? (
        <Text type="headingMedium" color={theme.backgroundContrast}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator color="white" />
      )}
    </TouchableOpacityBox>
  );
}
