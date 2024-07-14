import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../screens/auth/loginScreen/loginScreen';
import {SignUpScreen} from '../screens/auth/signupScreen/signupScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
