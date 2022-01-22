import { MovieCard } from './MovieCard';

import { Header } from './Header';

import '../styles/content.scss';

interface Rating {
  Source: string;
  Value: string;
}

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Rating[];
  Runtime: string;
}

interface ContentProps {
  movies: Movie[];
  selectedGenre: {
    title: string;
  };
}

export function Content(props: ContentProps) {
  // Complete aqui

  return (
    <div className="container">
      <Header selectedGenreTitle={props.selectedGenre.title} />

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}