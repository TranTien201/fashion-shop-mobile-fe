import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { globalStyle } from '../../styles/globals';
import { COLORS } from '../../constants/colors';
// import { FONTS } from '../constants/fonts';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type { RegisterScreenProps } from '../../types';

import { useState } from 'react';

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const getColorChange = (isFocused: boolean) => {
    return isFocused ? COLORS.primary : COLORS.subTitle;
  };

  const [isUsernameFocused, setIsUsernameFocused] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const handelRegister = async () => {
    setIsLoading(true);
  };
  return (
    <View style={globalStyle.fullScreen}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.headerAuth}>Create Account</Text>
        <Text style={globalStyle.subHeaderAuth}>
          Start learning with create your account
        </Text>
        <View style={[globalStyle.inputContainer]}>
          <Text style={globalStyle.titleInput}>Username</Text>
          <View
            style={[
              globalStyle.inputBlock,
              styles.inputBorder,
              { borderColor: getColorChange(isUsernameFocused) },
            ]}
          >
            <Ionicons
              style={globalStyle.iconInput}
              name={'person-outline'}
              size={30}
              color={getColorChange(isUsernameFocused)}
            />
            <TextInput
              style={globalStyle.textInput}
              placeholderTextColor={COLORS.subTitle}
              placeholder="Create your username"
              onFocus={() => setIsUsernameFocused(true)}
              onBlur={() => setIsUsernameFocused(false)}
              // value={formData.email}
              // onChangeText={text =>
              //   handleInputChange('email', text.toLowerCase())
              // }
            />
          </View>
        </View>
        <View style={[globalStyle.inputContainer]}>
          <Text style={globalStyle.titleInput}>Email</Text>
          <View
            style={[
              globalStyle.inputBlock,
              styles.inputBorder,
              { borderColor: getColorChange(isEmailFocused) },
            ]}
          >
            <Ionicons
              name={'mail-outline'}
              size={30}
              color={getColorChange(isEmailFocused)}
            />
            <TextInput
              style={globalStyle.textInput}
              placeholderTextColor={COLORS.subTitle}
              placeholder="Enter your email"
              keyboardType="email-address"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              // value={formData.email}
              // onChangeText={text =>
              //   handleInputChange('email', text.toLowerCase())
              // }
            />
          </View>
        </View>
        <View style={[globalStyle.inputContainer]}>
          <Text style={globalStyle.titleInput}>Password</Text>
          <View
            style={[
              globalStyle.inputBlock,
              styles.inputBorder,
              { borderColor: getColorChange(isPasswordFocused) },
            ]}
          >
            <Ionicons
              style={globalStyle.iconInput}
              name={'lock-closed-outline'}
              size={30}
              color={getColorChange(isPasswordFocused)}
            />
            <TextInput
              style={globalStyle.textInput}
              placeholderTextColor={COLORS.subTitle}
              placeholder="Create your password"
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              // value={formData.email}
              // onChangeText={text =>
              //   handleInputChange('email', text.toLowerCase())
              // }
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            >
              <Ionicons
                name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                size={30}
                disabled={isLoading}
                color={COLORS.subTitle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={globalStyle.buttonWrapper}
          onPress={handelRegister}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={COLORS.white} />
          ) : (
            <Text style={globalStyle.buttonText}>Create Account</Text>
          )}
        </TouchableOpacity>
        {/* <Text></Text> */}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyle.link}>Already Have an Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewAll: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {},
  inputBorder: {
    borderWidth: 1,
  },
});
