import React from 'react';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text marginBottom="s8" type="headingLarge">
        Olá
      </Text>
      <Text type="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        boxProps={{mb: 's14'}}
        errorMessage="Senha incorreta"
        placeholder="Digite seu e-mail"
        label="E-mail"
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        errorMessage="Senha incorreta"
        boxProps={{mb: 's10'}}
        rightComponent={<Icon name="eyeOff" size={22} color="gray2" />}
      />

      <Text color="primary" type="paragraphSmall" bold mb="s40">
        Esqueci minha senha
      </Text>

      <Button marginTop="s32" text="Entrar" buttonType="primary" />
      <Button buttonType="outline" marginTop="s12" text="Criar uma conta" />
    </Screen>
  );
}
