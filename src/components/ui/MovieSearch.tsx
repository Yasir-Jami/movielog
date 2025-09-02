import { SetStateAction } from "react";
import "/src/styles/MovieSearch.css"
import { Search } from "lucide-react";
import { MovieFilters } from "types";

interface MovieSearchProps {
  movieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>,
}

//TODO Reduce cpu usage
function filterByKeyword(searchTerm: string, movieFilters: MovieFilters, setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>) {
  let isFilteredByKeyword = true;
  if (searchTerm.length == 0) {
    isFilteredByKeyword = false;
  }
  
  const filters = {
    SearchFilter: searchTerm,
    GenreFilter: movieFilters.GenreFilter,
    FavoriteFilter: movieFilters.FavoriteFilter,
    FilteredByKeyword: isFilteredByKeyword,
    FilteredByGenre: movieFilters.FilteredByGenre,
  } as MovieFilters;
  
  setMovieFilters(filters);
}

function MovieSearch({movieFilters, setMovieFilters}: MovieSearchProps) {
  const searchPlaceholderText = "Search list...";
  
  return (
    <div className="movie-search">
      <div className="movie-search__input-wrapper">
        <Search className="movie-search__icon" size={16}/>
        <input 
          name="movie-searchbar"
          className="movie-search__textbox" 
          type="text" 
          placeholder={searchPlaceholderText} 
          onChange={(e) => {filterByKeyword(e.target.value, movieFilters, setMovieFilters)}}
          /> 
      </div>
    </div>
  )
}

export default MovieSearch;