import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Text from './Text';
import colors from '../config/colors';

const Card = ({title, subTitle, imageUrl, genreNames}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{uri: `https://image.tmdb.org/t/p/w500/${imageUrl}`}}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </Text>
        <Text style={styles.genres} numberOfLines={2}>
          {genreNames}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  genres: {
    color: colors.medium,
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 100,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
