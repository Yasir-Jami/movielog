import "@styles/MovieFilter.css";
import { MovieFilters, Genres, GenreEntry } from "types";
import { ListFilter, Heart, ArrowUpAZ, ArrowDownAZ, Filter } from "lucide-react";
import { useState } from "react";


interface MovieFilterProps {
  movieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<React.SetStateAction<MovieFilters>>;
}

interface MovieFilterCheckboxProps extends GenreEntry {
  onChange: (checked: boolean) => void;
}

enum FilterDisplayMode {
  hidden = "movie-filters-container--hidden",
  visible = "movie-filters-container--visible",
}

function MovieFilterCheckbox({name, filterApplied, onChange}: MovieFilterCheckboxProps) {
  return(
    <>
      <label className="genre-filter-label">
        <input 
        className="genre-filter-checkbox" 
        type="checkbox" 
        name={name} 
        checked={filterApplied}
        onChange={(e) => {onChange(e.target.checked)}}
        />
      {name}
      </label>
    </>
  )
}

function FavoriteFilter() {

}

function MovieFilter({movieFilters, setMovieFilters}: MovieFilterProps) {
  const [filtersDisplayMode, setFilterDisplayMode] = useState<FilterDisplayMode>(FilterDisplayMode.hidden);
  const handleCheckboxChange = (genreKey: keyof Genres) => (checked: boolean) => {
    const newFilters: MovieFilters = {
      ...movieFilters,
      GenreFilter: {
        ...movieFilters.GenreFilter,
        [genreKey]: {
          ...movieFilters.GenreFilter[genreKey],
          filterApplied: checked,
        }
      }
    }
    setMovieFilters(newFilters);
  }

  const clearAllGenreFilters = () => {
    const clearedGenreFilter = Object.fromEntries(
      Object.entries(movieFilters.GenreFilter).map(([key, value]) => [
      key,
      {...value, filterApplied: false},
    ])) as Genres;

    const newFilters: MovieFilters = {
      ...movieFilters,
      GenreFilter: clearedGenreFilter,
    }
    setMovieFilters(newFilters);
  }

  const toggleFiltersDisplay = () => {
    if (filtersDisplayMode == FilterDisplayMode.hidden) {
      setFilterDisplayMode(FilterDisplayMode.visible);
    }
    else {
      setFilterDisplayMode(FilterDisplayMode.hidden);
    }
  }

  return (
    <div className="movie-filters">
      <ListFilter className="movie-filters-icon" onClick={toggleFiltersDisplay}></ListFilter>
      {/* 
      <ArrowUpAZ></ArrowUpAZ>
      <ArrowDownAZ></ArrowDownAZ>
      */}
      <div className={filtersDisplayMode}>
        <div className="genre-filters">
          <button className="clear-genre-button" onClick={clearAllGenreFilters}>Clear all</button>
          {Object.entries(movieFilters.GenreFilter).map(([key, genre]) => (
            <MovieFilterCheckbox
            key={key}
            name={genre.name}
            filterApplied={genre.filterApplied}
            onChange={handleCheckboxChange(key as keyof Genres)}
            />
          ))}
        </div>
        <div className="favorite-filter"><Heart></Heart></div>
      </div>
    </div>
  )
}

export default MovieFilter;