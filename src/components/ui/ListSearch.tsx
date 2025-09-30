import { ChangeEvent, SetStateAction } from "react";
import "/src/styles/ListSearch.css"
import { Search } from "lucide-react";
import { MovieFilters } from "types";

interface ListSearchProps {
  movieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>,
}

function filterByKeyword(searchTerm: string, movieFilters: MovieFilters, setMovieFilters: React.Dispatch<SetStateAction<MovieFilters>>) {
  let isFilteredByKeyword = true;
  if (searchTerm.length == 0) {
    isFilteredByKeyword = false;
  }
  
  const filters = {
    ...movieFilters,
    SearchFilter: searchTerm,
    FilteredByKeyword: isFilteredByKeyword,
  } as MovieFilters;
  
  setMovieFilters(filters);
}

function ListSearch({movieFilters, setMovieFilters}: ListSearchProps) {
  const searchPlaceholderText = "Search list...";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    filterByKeyword(event.target.value, movieFilters, setMovieFilters);
  }
  
  return (
    <div className="list-search">
      <div className="list-search__input-wrapper">
        <Search className="list-search__icon" size={16}/>
        <input 
          name="list-searchbar"
          className="list-search__textbox" 
          type="text" 
          placeholder={searchPlaceholderText} 
          onChange={handleInputChange}
          /> 
      </div>
    </div>
  )
}

export default ListSearch;