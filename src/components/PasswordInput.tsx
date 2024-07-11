import React, {useState} from 'react';
import {TextInput, TextInputProps} from './TextInput';
import {Icon} from './Icon/Icon';

type PasswordInputProps = Omit<
  TextInputProps,
  'rightComponent' | 'secureTextEntry'
>;

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
    console.log('showPassword', showPassword);
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
      boxProps={{mb: 's48'}}
    />
  );
}
