import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {Text, Button, Screen, FormTextInput} from '@components';
import {useResetSuccessScreen} from '@hooks';

import {RootStackParamList} from '../../../routes/routes';

import {
  ForgetPasswordForm,
  ForgetPasswordFormSchema,
} from './forgetPasswordFormSchema';

type ForgetPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgetPasswordScreen'
>;

export function ForgetPasswordScreen({navigation}: ForgetPasswordScreenProps) {
  const {
    control,
    formState: {isValid},
    handleSubmit,
  } = useForm<ForgetPasswordForm>({
    resolver: zodResolver(ForgetPasswordFormSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const reset = useResetSuccessScreen({
    title: 'Enviamos as\ninstruções para seu\ne-mail',
    description:
      'Clique no link enviado no seu e-mail para recuperar sua senha',
    icon: {name: 'messageRound', color: 'primary'},
  });

  function navigateToSuccessScreen() {
    reset();
  }

  const onSubmit = (data: ForgetPasswordForm) => {};

  return (
    <Screen canGoBack>
      <Text type="headingLarge" mb="s16" color="backgroundContrast">
        Esqueci minha {'\n'}senha
      </Text>
      <Text type="paragraphLarge" mb="s32" color="backgroundContrast">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        control={control}
        name={'email'}
      />
      <Button
        disabled={!isValid}
        text="Recuperar senha"
        buttonType="primary"
        mt="s48"
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
}
