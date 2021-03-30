const genreNames = (genreIds, genres) => {
  const genresTypes = [];

  genreIds &&
    genreIds.forEach((id) => {
      genres &&
        genres.forEach((genre) => {
          if (genre.id === id) genresTypes.push(genre.name);
        });
    });

  return genresTypes;
};

export default genreNames;
