import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../screens/auth/loginScreen/loginScreen';
import {SignUpScreen} from '../screens/auth/signupScreen/signupScreen';
import {SuccessScreen} from '../screens/auth/successScreen/SuccessScreen';
import {IconProps} from '../components/Icon/Icon';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'color' | 'name'>;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
