import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
