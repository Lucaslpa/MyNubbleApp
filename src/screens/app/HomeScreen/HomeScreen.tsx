import React from 'react';

import {Box, Button, Text} from '@components';

import {AppScreenBottomTabProps} from '@/routes/navigationTypes';

type HomeScreenProps = AppScreenBottomTabProps<'HomeScreen'>;

export function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text type="headingLarge">Home Screen</Text>
      <Button
        text="button"
        type="primary"
        onPress={() => {
          navigation.navigate('MyProfileScreen');
        }}
      />
    </Box>
  );
}
