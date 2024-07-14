import React from 'react';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';
import {useResetSuccessScreen} from '../../../hooks/useResetSuccessScree';

type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export function SignUpScreen({navigation}: SignUpScreenProps) {
  const reset = useResetSuccessScreen({
    title: 'Conta criada',
    description:
      'Sua conta foi criada com sucesso. Agora você pode fazer login.',
    icon: {name: 'checkRound', color: 'success'},
  });

  function submitForm() {
    reset();
  }

  return (
    <Screen canGoBack>
      <Text type="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's14'}} />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's14'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's14'}}
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
