import "/src/styles/MovieList.css";
//import AddMovie from "./AddMovie.tsx"
import MovieGrid from "src/components/ui/MovieGrid";
import { MovieInfo } from "src/interfaces.ts";

interface MovieListProps {
  listName: string,
  movieCount: number,
  movieInfo: MovieInfo,
}

function MovieList() {

  return (
    <div className="list-container">
      <div className="list-container__search"></div>
      <MovieGrid />
    </div>
  )
}


export default MovieList;