import React, { useEffect, useState } from "react";
import FilmComponent from "./Components/FilmComponent";
import InputComponent from "./Components/InputComponent";

const App = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [filmsWithGenres, setFilmsWithGenres] = useState<FilmWithGenres[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const moviesEndpoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false";

  const genreEndpoint =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US";

  const searchEndpoint =
    "https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=";

  async function getResources<T>(
    endpoint: string,
    callback: (result: T) => void
  ) {
    const response = await fetch(endpoint);
    const result: T = await response.json();
    callback(result);
  }

  useEffect(() => {
    getResources<GenreResponse>(genreEndpoint, (result) => {
      setGenres(result.genres);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      getResources,
      500,
      searchTerm === "" ? moviesEndpoint : `${searchEndpoint}${searchTerm}`,
      (result: FilmResponse) => {
        setFilms(result.results);
      }
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm]);

  useEffect(() => {
    const filmsWithGenres = films.map((film) => {
      const genresOfFilm: string[] = [];
      film.genre_ids.forEach((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        if (genre) {
          genresOfFilm.push(genre.name);
        }
      });
      return { ...film, genres: genresOfFilm };
    });
    setFilmsWithGenres(filmsWithGenres);
  }, [films, genres]);

  return (
    <div className="app-container">
      <InputComponent
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <div className="film-container">
        {filmsWithGenres.map((film) => (
          <FilmComponent film={film} />
        ))}
      </div>
    </div>
  );
};

export default App;
