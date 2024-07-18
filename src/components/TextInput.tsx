import React from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box, BoxProps} from './Box';
import {$fontFamily, $fontSizes, Text} from './Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  boxProps,
  rightComponent,
  ...rest
}: TextInputProps) {
  const theme = useAppTheme();
  const inputRef = React.useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text type="paragraphMedium" color="backgroundContrast">
          {label}
        </Text>
        <Box
          borderRadius="s12"
          mt="s4"
          borderWidth={2}
          borderColor={errorMessage ? 'error' : 'gray4'}
          flexDirection="row"
          padding="s16"
          alignItems="center">
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={theme.colors.gray2}
            {...rest}
            style={{
              color: theme.colors.backgroundContrast,
              ...$textInputStyle,
            }}
          />
          {rightComponent && <Box ml="s8">{rightComponent}</Box>}
        </Box>
        <Box height={25} mt="s8">
          <Text type="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
