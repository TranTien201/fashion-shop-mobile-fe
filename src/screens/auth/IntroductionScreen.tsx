import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import type { IntroductionScreenProps } from '../../types';

export default function IntroductionScreen({
  navigation,
}: IntroductionScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SBTC Fashion</Text>
        <Text style={styles.subTitle}>Any shopping just from Home</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.version}>Version 0.0.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 42,
    fontFamily: FONTS.extra_bold,
    textAlign: 'center',
  },
  subTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    marginBottom: 80,
  },
  version: {
    textAlign: 'center',
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
});
