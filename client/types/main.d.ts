interface InputComponentProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface FilmResponse {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}

interface FilmComponentProps {
  film: FilmWithGenres;
}

interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  genres: Genre[];
}

interface FilmWithGenres extends Film {
  genres: string[];
}
