import React from 'react';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    // TODO: implementar
  }

  return (
    <Screen canGoBack>
      <Text type="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's16'}} />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's16'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        errorMessage="E-mail inválido"
        boxProps={{mb: 's16'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button
        onPress={submitForm}
        text="Criar uma conta"
        buttonType="primary"
      />
    </Screen>
  );
}
