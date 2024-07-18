import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '../components/Icon/Icon';
import {ForgetPasswordScreen} from '../screens/auth/forgetPasswordScreen/forgetPasswordScreen';
import {LoginScreen} from '../screens/auth/loginScreen/loginScreen';
import {SignUpScreen} from '../screens/auth/signupScreen/signupScreen';
import {SuccessScreen} from '../screens/auth/successScreen/successScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'color' | 'name'>;
  };
  ForgetPasswordScreen: undefined;
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
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
