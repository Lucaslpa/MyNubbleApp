import React from 'react';

import {Box, Button, Text} from '@components';

import {AppScreenBottomTabProps} from '@/routes/navigationTypes';

type NewPostScreenProps = AppScreenBottomTabProps<'NewPostScreen'>;

export function NewPostScreen({}: NewPostScreenProps) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text type="headingLarge">New post</Text>
      <Button text="button" type="primary" onPress={() => {}} />
    </Box>
  );
}
