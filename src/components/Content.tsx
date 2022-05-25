import { MovieCard } from "./MovieCard";

import { GenreResponseProps } from "../@types/genre.interface";
import { MovieProps } from "../@types/movie.interface";
import { Header } from "./Header";

interface SidebarProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[]
}

export function Content(props: SidebarProps) {
  const { selectedGenre, movies } = props;

  return (
    <div className="container">
     <Header selectedGenre={selectedGenre}/>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}