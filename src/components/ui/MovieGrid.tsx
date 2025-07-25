import { MovieGridProps } from "interfaces";
import "@styles/MovieList.css"
import MovieCard from "@components/ui/MovieCard";
import testMovieArray from "tests/DummyMovieData";

interface MovieInfo {
  Title: string,
  Poster: string,
  Year?: string,
  Plot?: string,
  Genre?: string,
  ImdbRating?: string,
}

function MovieGrid (props: MovieGridProps) {
  //const { movieListName, movieCount, movieArray } = props;
  const data: MovieInfo[] = testMovieArray();

  return (
    <div className="movie-grid">
      <MovieCard {...data[0]}/>
      <MovieCard {...data[1]}/>
      <MovieCard {...data[2]}/>
      <MovieCard {...data[3]}/>
      <MovieCard {...data[4]}/>
      <MovieCard {...data[5]}/>
      <MovieCard {...data[6]}/>
      <MovieCard {...data[7]}/>
      <MovieCard {...data[8]}/>

      {/* Nodes */}
    </div>
  )

}

export default MovieGrid;