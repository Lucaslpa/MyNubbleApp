import {NativeStackScreenProps} from '@react-navigation/native-stack';

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
