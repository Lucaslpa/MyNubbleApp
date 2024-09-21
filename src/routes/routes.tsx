import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStackRoutes} from './AppStack';
import {AuthStackRoutes} from './AuthStack';

export default function Routes() {
  const isAuthorized = false;

  return (
    <NavigationContainer>
      {isAuthorized ? <AppStackRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  );
}
