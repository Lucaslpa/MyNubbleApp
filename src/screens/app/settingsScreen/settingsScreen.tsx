import React from 'react';

import {Box, Button, Text} from '@components';

import {AppScreenProps} from '@/routes/navigationTypes';

type SettingsScreenProps = AppScreenProps<'SettingsScreen'>;

export function SettingsScreen({navigation}: SettingsScreenProps) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text type="headingLarge">Settings Screen</Text>
      <Button text="button" type="primary" onPress={() => {}} />
    </Box>
  );
}
