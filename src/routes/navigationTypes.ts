import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppScreensBottomTabParamList} from './AppBottomNavigator';
import {AppStackParamList} from './AppStack';
import {AuthStackParamList} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, AuthStackParamList {}
  }
}

export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type AppScreenBottomTabProps<
  T extends keyof AppScreensBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppScreensBottomTabParamList, T>,
  NativeStackScreenProps<Omit<AppStackParamList, 'AppBottomNavigator'>>
>;
