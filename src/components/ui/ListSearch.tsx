import { SetStateAction } from "react";
import "/src/styles/ListSearch.css"
import { Search } from "lucide-react";
import { MovieFilters } from "types";

interface ListSearchProps {
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

function ListSearch({movieFilters, setMovieFilters}: ListSearchProps) {
  const searchPlaceholderText = "Search list...";
  
  return (
    <div className="list-search">
      <div className="list-search__input-wrapper">
        <Search className="list-search__icon" size={16}/>
        <input 
          name="list-searchbar"
          className="list-search__textbox" 
          type="text" 
          placeholder={searchPlaceholderText} 
          onChange={(e) => {filterByKeyword(e.target.value, movieFilters, setMovieFilters)}}
          /> 
      </div>
    </div>
  )
}

export default ListSearch;