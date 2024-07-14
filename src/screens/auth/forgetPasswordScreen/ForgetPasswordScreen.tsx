import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {RootStackParamList} from '../../../routes/routes';
import {useResetSuccessScreen} from '../../../hooks/useResetSuccessScree';

type ForgetPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgetPasswordScreen'
>;

export function ForgetPasswordScreen({navigation}: ForgetPasswordScreenProps) {
  const reset = useResetSuccessScreen({
    title: 'Enviamos as\ninstruções para seu\ne-mail',
    description:
      'Clique no link enviado no seu e-mail para recuperar sua senha',
    icon: {name: 'messageRound', color: 'primary'},
  });

  function navigateToSuccessScreen() {
    reset();
  }

  return (
    <Screen canGoBack>
      <Text type="headingLarge" mb="s16" color="backgroundContrast">
        Esqueci minha {'\n'}senha
      </Text>
      <Text type="paragraphLarge" mb="s32" color="backgroundContrast">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />
      <Button
        text="Recuperar senha"
        buttonType="primary"
        mt="s48"
        onPress={navigateToSuccessScreen}
      />
    </Screen>
  );
}
