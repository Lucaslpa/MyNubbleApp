import React from 'react';

import {
  FormTextInput,
  FormPasswordInput,
  Text,
  Button,
  Screen,
} from '@components';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';
import {useResetSuccessScreen} from '@hooks';
import {useForm} from 'react-hook-form';

import {zodResolver} from '@hookform/resolvers/zod';
import {SignUpForm, SignUpFormSchema} from './signUpFormSchema';

type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

interface FormData {
  username: string;
  name: string;
  email: string;
  password: string;
}

export function SignUpScreen({navigation}: SignUpScreenProps) {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: '',
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const reset = useResetSuccessScreen({
    title: 'Conta criada',
    description:
      'Sua conta foi criada com sucesso. Agora você pode fazer login.',
    icon: {name: 'checkRound', color: 'success'},
  });

  function submitForm(data: FormData) {
    reset();
  }

  return (
    <Screen canGoBack>
      <Text type="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        name="username"
        label="Seu username"
        placeholder="@"
        control={control}
      />

      <FormTextInput
        name="name"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        control={control}
      />

      <FormTextInput
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        control={control}
      />

      <FormPasswordInput
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        control={control}
        boxProps={{mb: 's56'}}
      />

      <Button
        disabled={!isValid}
        onPress={handleSubmit(submitForm)}
        text="Criar uma conta"
        buttonType="primary"
      />
    </Screen>
  );
}
