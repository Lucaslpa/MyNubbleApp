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
  } = useForm<FormData>({
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
    console.log(data);
    reset();
  }

  return (
    <Screen canGoBack>
      <Text type="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <Controller
        control={control}
        name="username"
        rules={{
          required: {
            value: true,
            message: 'O username é obrigatório',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Seu username"
            placeholder="@"
            boxProps={{mb: 's14'}}
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="name"
        rules={{
          required: {
            value: true,
            message: 'O nome é obrigatório',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            boxProps={{mb: 's14'}}
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: {
            value: true,
            message: 'O e-mail é obrigatório',
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's14'}}
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'A senha é obrigatória',
          },
          minLength: {
            value: 6,
            message: 'A senha deve ter no mínimo 6 caracteres',
          },
        }}
        name="password"
        render={({field, fieldState}) => (
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's48'}}
            onChangeText={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
          />
        )}
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
