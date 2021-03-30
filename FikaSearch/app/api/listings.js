import client from './client';

const endpoints = {
  movies:
    '/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1',
  genres:
    '/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US',
};

const getMovies = () => client.get(endpoints.movies);

const getGenres = () => client.get(endpoints.genres);

export default {
  getMovies,
  getGenres,
};
