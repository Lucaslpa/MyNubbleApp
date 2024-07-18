import React, {useEffect} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon, Button, Screen, Text} from '@components';

import {RootStackParamList} from '../../../routes/routes';

type SuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SuccessScreen'
>;

export function SuccessScreen({navigation, route}: SuccessScreenProps) {
  const title = route.params.title;

  useEffect(() => {
    console.log(title);
  }, []);

  const description = route.params.description;
  const icon = route.params.icon;

  function navigateToLogin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon name={icon.name} size={48} color={icon.color} />
      <Text type="headingLarge" mb="s16" mt="s24">
        {title}
      </Text>
      <Text type="paragraphLarge" mb="s40">
        {description}
      </Text>
      <Button
        text="Voltar ao início"
        buttonType="primary"
        onPress={navigateToLogin}
      />
    </Screen>
  );
}
