import React from "react";

const FilmComponent = ({ film }: FilmComponentProps) => {
  return (
    <div className="film-component-container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        className="film-poster"
      />
      <div className="film-component-genre">{`Genre: ${film.genres.join(
        ", "
      )}`}</div>
    </div>
  );
};

export default FilmComponent;
