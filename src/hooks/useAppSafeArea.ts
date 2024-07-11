import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();

  return {
    top: Math.max(40, top),
    bottom: Math.max(34, bottom),
  };
}
