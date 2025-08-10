import "/src/styles/MovieSearch.css"
import { Search } from "lucide-react";

function MovieSearch() {
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
        />
      </div>
    </div>
  )
}

export default MovieSearch;