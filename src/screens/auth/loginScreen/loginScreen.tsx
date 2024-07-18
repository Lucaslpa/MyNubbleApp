import React from 'react';
import {TouchableOpacity} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
  Text,
} from '@components';

import {RootStackParamList} from '../../../routes/routes';

import {LoginForm, LoginFormSchema} from './loginFormSchema';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

interface FormData {
  email: string;
  password: string;
}

export function LoginScreen({navigation}: LoginScreenProps) {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUp() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgetPassword() {
    navigation.navigate('ForgetPasswordScreen');
  }

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Screen>
      <Text marginBottom="s8" type="headingLarge">
        Olá
      </Text>
      <Text type="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        name="email"
        label="Email"
        placeholder="Digite seu e-mail"
        control={control}
      />

      <FormPasswordInput
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        control={control}
      />

      <TouchableOpacity onPress={navigateToForgetPassword}>
        <Text color="primary" type="paragraphSmall" bold mb="s40">
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <Button
        marginTop="s32"
        disabled={!isValid}
        text="Entrar"
        buttonType="primary"
        onPress={handleSubmit(onSubmit)}
      />
      <Button
        buttonType="outline"
        marginTop="s12"
        text="Criar uma conta"
        onPress={navigateToSignUp}
      />
    </Screen>
  );
}
