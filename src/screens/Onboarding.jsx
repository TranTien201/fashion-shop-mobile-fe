import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { OnboardSlide } from '../constants/slide';
import { SlideItem } from '../components/SlideItem';
import { FONTS } from '../constants/fonts';
// import { FONTS } from '../constants/fonts';

const { width, height } = Dimensions.get('window');

export default function Onboarding({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.viewAll}>
      <View style={styles.container}>
        {/* FlatList để trượt */}
        <FlatList
          data={OnboardSlide}
          renderItem={({ item }) => <SlideItem item={item} />}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
        />

        {/* Indicator */}
        <View style={styles.dotsContainer}>
          {OnboardSlide.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 20, 8],
              extrapolate: 'clamp',
            });

            const dotColor = scrollX.interpolate({
              inputRange,
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={i}
                style={[
                  styles.dot,
                  { width: dotWidth, backgroundColor: dotColor },
                ]}
              />
            );
          })}
        </View>

        {/* Nút */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation?.navigate('Register')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
          <Text style={styles.link}>Already Have an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewAll: {
    flex: 1,
    backgroundColor: COLORS.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: width * 0.85,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.85,
    height: height * 0.4,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.extra_bold,
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
