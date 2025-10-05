import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import type { RouteProp } from '@react-navigation/native';

/**
 * MAIN STACK PARAM LIST
 * Định nghĩa tất cả màn hình sau khi đã đăng nhập
 */
export type MainStackParamList = {
  // Màn hình không có params
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// ===========================
// NAVIGATION PROPS
// ===========================

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Home'
>;

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Profile'
>;

export type SettingsScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Settings'
>;

// ===========================
// SCREEN PROPS
// ===========================

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProp;
}
