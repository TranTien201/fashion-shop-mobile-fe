import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

const { width } = Dimensions.get('window');

export const globalStyle = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: COLORS.background,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    marginTop: 80,
    width: width * 0.85,
    marginBottom: 20,
  },
  headerAuth: {
    fontSize: 26,
    color: COLORS.title,
    fontFamily: FONTS.bold,
  },
  subHeaderAuth: {
    fontSize: 16,
    color: COLORS.subTitle,
    fontFamily: FONTS.medium,
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
    // backgroundColor: COLORS.income,
  },
  titleInput: {
    fontSize: 20,
    fontFamily: FONTS.semi_bold,
    textAlign: 'left',
  },
  inputBlock: {
    backgroundColor: '#f8f8f8ff',
    marginTop: 10,
    color: COLORS.income,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
  },
  iconInput: {},
  textInput: {
    marginLeft: 15,
    fontFamily: FONTS.medium,
    fontSize: 16,
    flex: 1,
  },
  buttonWrapper: {
    marginTop: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: FONTS.semi_bold,
    color: COLORS.white,
    padding: 18,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: FONTS.extra_bold,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
});
