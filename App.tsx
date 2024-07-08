import React from 'react';
import {SafeAreaView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Box} from './src/components/Box';
import {TextInput} from './src/components/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 40}}>
          <Text marginBottom="s8" type="headingLarge">
            Olá
          </Text>
          <Text type="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            boxProps={{mb: 's14'}}
            errorMessage="Senha incorreta"
            placeholder="Digite seu e-mail"
            label="E-mail"
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage="Senha incorreta"
            boxProps={{mb: 's10'}}
            rightComponent={<Icon name="eyeOff" size={22} color="gray2" />}
          />

          <Text color="primary" type="paragraphSmall" bold mb="s40">
            Esqueci minha senha
          </Text>

          <Button marginTop="s32" text="Entrar" buttonType="primary" />
          <Button buttonType="outline" marginTop="s12" text="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
