import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

import {BottomTabBar} from './BottomTabBar';

export type AppScreensBottomTabParamList = {
  HomeScreen: undefined;
  MyProfileScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
};

const Tab = createBottomTabNavigator<AppScreensBottomTabParamList>();

export default function AppBottomTabNavigator() {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />;
  };

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
