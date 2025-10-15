import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { SlideModel } from '../models/slide';
import { FONTS } from '../constants/fonts';
import { COLORS } from '../constants/colors';

interface SlideItemProps {
  item: SlideModel;
}

const { width, height } = Dimensions.get('window');

export const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
  return (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        <Image source={item.url} style={styles.image} />
      </View>
      {item.title && <Text style={styles.title}>{item.title}</Text>}
      {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: width * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: width * 0.85,
    height: height * 0.48, // ĐẶT HEIGHT CỐ ĐỊNH CHO CONTAINER
    borderRadius: 70,
    overflow: 'hidden', // QUAN TRỌNG: ẩn phần ảnh thừa
  },
  image: {
    width: '100%',
    height: '100%', // Fill đầy container
    resizeMode: 'cover', // Hoặc thử 'contain' để xem toàn bộ ảnh
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontFamily: FONTS.semi_bold,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: COLORS.title,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.subTitle,
    fontFamily: FONTS.medium,
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 20,
  },
});
