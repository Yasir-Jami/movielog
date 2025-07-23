import "/src/styles/Searchbar.css"
import { Search } from "lucide-react";

function Searchbar() {
  const placeholderText = "Search movies...";
  
  return (
    <div className="movie-search">
      <div className="movie-search__input-wrapper">
        <Search className="movie-search__icon"/>
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

export default Searchbar;