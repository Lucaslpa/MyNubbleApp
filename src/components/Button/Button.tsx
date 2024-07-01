import React from 'react';
import {Text} from '../Text';

import {TouchableOpacityBox} from '../TouchableOpacityBox';
import {ButtonProps} from './types';
import {buttonThemes} from './theme';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export function Button({loading, text, buttonType, disabled}: ButtonProps) {
  const buttonTheme =
    buttonThemes[buttonType][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      backgroundColor={buttonTheme.background}
      borderWidth={buttonTheme.borderWidth}
      borderColor={buttonTheme.borderColor}>
      {!loading ? (
        <Text type="headingMedium" color={buttonTheme.backgroundContrast}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator color={buttonTheme.backgroundContrast} size={30} />
      )}
    </TouchableOpacityBox>
  );
}
