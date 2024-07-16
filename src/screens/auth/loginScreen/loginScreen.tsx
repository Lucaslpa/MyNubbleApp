import React from 'react';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/routes';
import {TouchableOpacity} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {zodResolver} from '@hookform/resolvers/zod';
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
