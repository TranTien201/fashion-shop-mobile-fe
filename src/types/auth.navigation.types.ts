import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  OTP: {
    email: string;
    onVerify: (code: string) => void;
    onResend: () => void;
    onBack: () => void;
  };
  Register: undefined;
  Introduction: undefined;
  Onboarding: undefined;
};

// ===========================
// NAVIGATION PROPS
// ===========================

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export type OTPScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'OTP'
>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

export type IntroductionScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Introduction'
>;

export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Onboarding'
>;

// ===========================
// ROUTE PROPS (để lấy params)
// ===========================
export type OTPScreenRouteProp = RouteProp<AuthStackParamList, 'OTP'>;

// ===========================
// SCREEN PROPS (combine navigation + route)
// ===========================
export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

export interface IntroductionScreenProps {
  navigation: IntroductionScreenNavigationProp;
}

export interface OnboardingScreenProps {
  navigation: OnboardingScreenNavigationProp;
}

export interface OTPScreenProps {
  navigation: OTPScreenNavigationProp;
  route: OTPScreenRouteProp;
} //Trong trường hợp nếu 1 screen cần nhận thêm param
