import React from 'react';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';
import {useResetSuccessScreen} from '../../../hooks/useResetSuccessScree';
import {Controller, useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
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
