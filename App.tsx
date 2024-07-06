import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Box} from './src/components/Box';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <Text type="headingLarge">teste</Text>
        <Box marginBottom="s10">
          <Button text="Entrar" buttonType="primary" loading />
        </Box>
        <Box marginBottom="s10">
          <Button text="Entrar" buttonType="primary" disabled />
        </Box>
        <Box marginBottom="s10">
          <Button text="Entrar" buttonType="primary" />
        </Box>
        <Button text="Entrar" buttonType="outline" loading />
        <Icon name="trash" size={60} color="error" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
