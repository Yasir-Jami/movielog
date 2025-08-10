import "@styles/MovieList.css"
import MovieCard from "@components/ui/MovieCard";
import testMovieArray from "tests/DummyMovieData";
import { MovieInfo } from "types";

//function MovieGrid (props: MovieGridProps) {
function MovieGrid() {
  //const { movieListName, movieCount, movieArray } = props;
  const movie: MovieInfo[] = testMovieArray();

  return (
    <div className="movie-grid">
      <MovieCard {...movie[0]}/>
      <MovieCard {...movie[1]}/>
      <MovieCard {...movie[2]}/>
      <MovieCard {...movie[3]}/>
      <MovieCard {...movie[4]}/>
      <MovieCard {...movie[5]}/>
      <MovieCard {...movie[6]}/>
      <MovieCard {...movie[7]}/>
      <MovieCard {...movie[8]}/>

      {/* Nodes */}
    </div>
  )

}

export default MovieGrid;