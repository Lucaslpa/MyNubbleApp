import React, {useState} from 'react';

import {Icon} from './Icon/Icon';
import {TextInput, TextInputProps} from './TextInput';

export type PasswordInputProps = Omit<
  TextInputProps,
  'rightComponent' | 'secureTextEntry'
>;

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <TextInput
      secureTextEntry={!showPassword}
      placeholder="Digite sua senha"
      {...props}
      rightComponent={
        <Icon
          onPress={toggleShowPassword}
          name={showPassword ? 'eyeOff' : 'eyeOn'}
          size={22}
          color="gray2"
        />
      }
    />
  );
}
