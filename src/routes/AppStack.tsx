import * as React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import AppBottomNavigator, {
  AppScreensBottomTabParamList,
} from './AppBottomNavigator';

export type AppStackParamList = {
  AppBottomNavigator: NavigatorScreenParams<AppScreensBottomTabParamList>;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AppBottomNavigator">
      <Stack.Screen name="AppBottomNavigator" component={AppBottomNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
