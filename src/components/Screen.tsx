import React from 'react';
import {Box, Text, Icon} from './';
import {useAppSafeArea} from '@hooks';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

interface Props {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack}: Props) {
  const {top, bottom} = useAppSafeArea();

  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.goBack();
  }

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      enableResetScrollToCoords={false}
      keyboardShouldPersistTaps="handled">
      <Box
        paddingHorizontal="s24"
        style={{
          paddingTop: top,
          paddingBottom: bottom + 40,
        }}>
        {canGoBack && (
          <TouchableOpacity onPress={navigateToLogin}>
            <Box mb="s24" flexDirection="row" alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text type="paragraphMedium" bold ml="s8">
                Voltar
              </Text>
            </Box>
          </TouchableOpacity>
        )}
        {children}
      </Box>
    </KeyboardAwareScrollView>
  );
}
