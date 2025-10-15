import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { OTPScreenProps } from '../../types';
import React, { useState, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

import { globalStyle } from '../../styles/globals';

const { width } = Dimensions.get('window');

const OTPScreen = ({ navigation, route }: OTPScreenProps) => {
  const { email, onVerify, onResend, onBack } = route.params ?? {};

  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  return (
    <View style={styles.fullScreen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.shadow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verifycation</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  header: {
    width: width * 0.85,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    marginHorizontal: 20,
    paddingVertical: 25,
  },
  backButton: {},
  line: {
    borderColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  headerTitle: {
    textAlign: 'center',
    flex: 1,
    fontFamily: FONTS.bold,
  },
});
