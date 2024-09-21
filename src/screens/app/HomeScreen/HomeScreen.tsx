import React from 'react';

import {Box, Button, Text} from '@components';

import {AppScreenProps} from '@/routes/navigationTypes';

type HomeScreenProps = AppScreenProps<'HomeScreen'>;

export function HomeScreen({}: HomeScreenProps) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text type="headingLarge">Home Screen</Text>
      <Button text="button" type="primary" onPress={() => {}} />
    </Box>
  );
}
