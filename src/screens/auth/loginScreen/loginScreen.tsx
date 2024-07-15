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
  } = useForm<FormData>({
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

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'E-mail é obrigatório',
          },
        }}
        name="email"
        render={({field, fieldState}) => (
          <TextInput
            boxProps={{mb: 's14'}}
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
            placeholder="Digite seu e-mail"
            label="E-mail"
          />
        )}
      />

      <Controller
        control={control}
        rules={{
          minLength: {
            value: 6,
            message: 'A senha deve ter no mínimo 6 caracteres',
          },
        }}
        name="password"
        render={({field, fieldState}) => (
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's4'}}
            rightComponent={<Icon name="eyeOff" size={22} color="gray2" />}
          />
        )}
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
