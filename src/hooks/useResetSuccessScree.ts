import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/routes';

export function useResetSuccessScreen(
  params: RootStackParamList['SuccessScreen'],
) {
  const {reset} = useNavigation();
  return () => {
    reset({
      index: 1,
      routes: [
        {name: 'LoginScreen'},
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  };
}
