import React from 'react';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Text} from '../Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox';

import {buttonThemes} from './theme';
import {ButtonProps} from './types';

export function Button({
  loading,
  text,
  type,
  disabled,
  onPress,
  ...props
}: ButtonProps) {
  const buttonTheme = buttonThemes[type][disabled ? 'disabled' : 'default'];
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
      borderColor={buttonTheme.borderColor}
      onPress={onPress}
      {...props}>
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
