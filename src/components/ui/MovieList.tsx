import "/src/styles/MovieList.css";
import { MovieGridProps, MovieInfo } from "types";
import MovieSearch from "@components/ui/MovieSearch"
import MovieGrid from "@components/ui/MovieGrid";
import MovieActions from "@components/ui/MovieActions";

/*
function getMovieLists() {
  

  useEffect(() => {
    const getLists = async () => {
      const response = await fetch("URL");
      const data = await response.json();
      
    }


  }, []);

}
*/

function MovieList() {
  const moviesArray: MovieInfo[] = [];
  
  const movieProps: MovieGridProps = {
    movieListName: "Watching",
    //movieCount: moviesArray.length,
    movieCount: 9,
    movieArray: moviesArray,
  }

  return (
    <div className="list-container">
      <MovieSearch />
        <div className="list-container__metadata">
          <h2 className="list-container__list-name">{movieProps.movieListName}</h2>
          <p className="list-container__movie-count">{movieProps.movieCount} movies</p>
        </div>
      <MovieActions />
      <MovieGrid />
    </div>
  )
}

export default MovieList;