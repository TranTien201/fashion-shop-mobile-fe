import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import IntroductionScreen from '../screens/auth/IntroductionScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

import type { AuthStackParamList } from '../types';
// Define the types for the navigation stack

const Stack = createNativeStackNavigator<AuthStackParamList>();

function MainStack() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Introduction" component={IntroductionScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default MainStack;
