import React from 'react';
import {Box} from './Box';
import {Text} from './Text';
import {Icon} from './Icon/Icon';
import {useAppSafeArea} from '../hooks/useAppSafeArea';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack}: Props) {
  const {top, bottom} = useAppSafeArea();

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
          <Box mb="s24" flexDirection="row" alignItems="center">
            <Icon name="arrowLeft" color="primary" />
            <Text type="paragraphMedium" bold ml="s8">
              Voltar
            </Text>
          </Box>
        )}
        {children}
      </Box>
    </KeyboardAwareScrollView>
  );
}
