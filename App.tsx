import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { SlideItem } from './src/components/SlideItem';
import { SlideModel } from './src/models/slide';
import { OnboardSlide } from './src/constants/slide';

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.85; // Giảm width để có thể thấy item bên cạnh
const ITEM_SPACING = width * 0.05; // Khoảng cách giữa các item
const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_SPACING; // Tổng width bao gồm spacing
const SPACER = (width - ITEM_WIDTH) / 2; // Spacer để center item đầu tiên

export default function Onboarding({ navigation }: { navigation: any }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* FlatList để trượt */}
      <Animated.FlatList
        data={[
          { key: 'left-spacer' },
          ...OnboardSlide,
          { key: 'right-spacer' },
        ]}
        renderItem={({ item, index }) => {
          if (!('url' in item)) {
            return <View style={{ width: SPACER }} />;
          }

          return (
            <View
              style={[styles.slideContainer, getSlideStyle(index).container]}
            >
              <SlideItem item={item as SlideModel} />
            </View>
          );
        }}
        keyExtractor={(item, index) =>
          'id' in item ? item.id : item.key + index
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={TOTAL_ITEM_WIDTH} // Snap theo tổng width + spacing
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={styles.flatListContent} // Đảm bảo không có padding thêm
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      />

      {/* Indicator */}
      <View style={styles.dotsContainer}>
        {OnboardSlide.map((_, i) => {
          // Tính toán inputRange dựa trên TOTAL_ITEM_WIDTH
          const inputRange = [
            (i - 1) * TOTAL_ITEM_WIDTH,
            i * TOTAL_ITEM_WIDTH,
            (i + 1) * TOTAL_ITEM_WIDTH,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 20, 8],
            extrapolate: 'clamp',
          });

          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc', '#6C63FF', '#ccc'],
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
  );
}

const getSlideStyle = (index: number) =>
  StyleSheet.create({
    container: {
      width: ITEM_WIDTH,
      marginRight: index === OnboardSlide.length - 1 ? 0 : ITEM_SPACING,
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10, // Padding bên trong mỗi slide
  },
  slide: {
    width,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.9,
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
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    fontSize: 14,
    color: '#6C63FF',
    fontWeight: '500',
    marginBottom: 20,
  },
  flatListContent: {
    paddingHorizontal: 0,
  },
});
