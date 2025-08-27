import { SetStateAction } from "react";
import "/src/styles/MovieSearch.css"
import { Search } from "lucide-react";
import { MovieFilters } from "types";

interface MovieSearchProps {
  movieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>,
}

function filterByKeyword(searchTerm: string, movieFilters: MovieFilters, setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>) {
  const filters = {} as MovieFilters;
  //TODO Check performance on this
  filters.SearchFilter = searchTerm;
  filters.FavoriteFilter = movieFilters.FavoriteFilter;
  filters.GenreFilter = movieFilters.GenreFilter;
  setMovieFilters(filters);
}

function MovieSearch({movieFilters, setMovieFilters}: MovieSearchProps) {
  const placeholderText = "Search movies...";
  
  return (
    <div className="movie-search">
      <div className="movie-search__input-wrapper">
        <Search className="movie-search__icon" size={16}/>
        <input 
          name="movie-searchbar"
          className="movie-search__textbox" 
          type="text" 
          placeholder={placeholderText} 
          onChange={(e) => {filterByKeyword(e.target.value, movieFilters, setMovieFilters)}}
          /> 
      </div>
    </div>
  )
}

export default MovieSearch;