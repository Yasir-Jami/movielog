import { SetStateAction } from "react";
import "/src/styles/MovieSearch.css"
import { Search } from "lucide-react";
import { MovieFilters } from "types";

interface MovieSearchProps {
  movieFilters: MovieFilters;
  filterBySearch: React.Dispatch<SetStateAction<MovieFilters>>;
}

function MovieSearch({movieFilters, filterBySearch}: MovieSearchProps) {
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
          onChange={e => {movieFilters.SearchFilter = e.target.value; console.log(movieFilters.SearchFilter); filterBySearch(movieFilters)}}
          /> 
      </div>
    </div>
  )
}

export default MovieSearch;