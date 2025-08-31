import "@styles/MovieFilters.css";
import { useState } from "react";
import { MovieFilters, Genre, GenreEntry } from "types";

interface MovieFilterProps {
  movieFilters: MovieFilters,
  setMovieFilters: React.Dispatch<React.SetStateAction<MovieFilters>>;
}

interface MovieFilterCheckboxProps extends GenreEntry {
  onChange: (checked: boolean) => void;
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

function MovieFilter({movieFilters, setMovieFilters}: MovieFilterProps) { 
  const handleCheckboxChange = (genreKey: keyof Genre) => (checked: boolean) => {
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
    ])) as Genre;

    const newFilters: MovieFilters = {
      ...movieFilters,
      GenreFilter: clearedGenreFilter,
    }
    
    setMovieFilters(newFilters);
  }

  return (
    <div className="movie-filters">
      <button className="clear-genre-button" onClick={clearAllGenreFilters}>Clear all</button>
      {Object.entries(movieFilters.GenreFilter).map(([key, genre]) => (
        <MovieFilterCheckbox
        key={key}
        name={genre.name}
        filterApplied={genre.filterApplied}
        onChange={handleCheckboxChange(key as keyof Genre)}
        />
      ))}
    </div>
  )

}


export default MovieFilter;