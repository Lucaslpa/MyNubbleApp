import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, IconName, TouchableOpacityBox, Text} from '@components';

import {AppScreensBottomTabParamList} from './AppBottomNavigator';

type BottomTabData = {
  text: string;
  icon: {
    focused: IconName;
    unfocused: IconName;
  };
};

type Mapper = Record<keyof AppScreensBottomTabParamList, BottomTabData>;

export const bottomTabBarScreensMapperData: Mapper = {
  HomeScreen: {
    text: 'Home',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  MyProfileScreen: {
    text: 'Profile',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
  NewPostScreen: {
    text: 'New Post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    text: 'Favorite',
    icon: {
      focused: 'heartFill',
      unfocused: 'heart',
    },
  },
};

export function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <Box
      style={{flexDirection: 'row'}}
      paddingVertical="s10"
      backgroundColor="background"
      justifyContent="space-between"
      alignItems="center">
      {state.routes.map((route, index) => {
        console.log('route', route.name);
        const {options} = descriptors[route.key];
        const data =
          bottomTabBarScreensMapperData[
            route.name as keyof AppScreensBottomTabParamList
          ];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            accessibilityRole="button"
            alignItems="center"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              name={isFocused ? data.icon.focused : data.icon.unfocused}
              size={26}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text color={isFocused ? 'primary' : 'backgroundContrast'} mt="s8">
              {data.text}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
