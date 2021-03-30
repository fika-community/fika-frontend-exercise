import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import AppText from '../components/Text';
import useApi from '../hooks/useApi';
import genreNames from '../helpers/movies';

const ListingsScreen = () => {
  const getMoviesApi = useApi(listingsApi.getMovies);
  const getGenresApi = useApi(listingsApi.getGenres);

  useEffect(() => {
    getMoviesApi.request();
    getGenresApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getMoviesApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getMoviesApi.request} />
        </>
      )}
      <ActivityIndicator visible={getMoviesApi.loading} />
      <FlatList
        data={getMoviesApi.data.results}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={item.release_date}
            imageUrl={item.poster_path}
            genreNames={genreNames(
              item.genre_ids,
              getGenresApi.data.genres,
            ).join(', ')}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
