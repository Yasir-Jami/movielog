import "@styles/AddMovie.css";
import { MovieMetadata } from "types";
import ImageNotFound from "assets/svgs/image-not-found.svg";
import {X} from "lucide-react";
import { useState, useEffect } from "react";
import { useMovieInputRef } from "@components/contexts/MovieInputContext";

interface AddMovieSearchProps {
  onMovieSelect: (movie: MovieMetadata) => void,
}

async function SearchForMovie({ searchTerm } : {searchTerm: string}) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIES}${import.meta.env.VITE_API_SEARCH_MOVIES}`;
  let searchResults: MovieMetadata[] = [];

  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ searchTerm })
  })
  .then(res => res.json())
  .then(data => {
    searchResults = (data.Search || []).map((movie: MovieMetadata) => ({
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
      imdbID: movie.imdbID,
    }));

    return searchResults;
  })
  .catch(err => logger.error("Error:", err));

  return searchResults;
}

function AddMovieSearch({onMovieSelect}: AddMovieSearchProps) {
  const [movieInput, setMovieInput] = useState<string>('');
  const [debouncedInput, setDebouncedInput] = useState<string>('');
  const [results, setResults] = useState<MovieMetadata[]>([]);
  const [resultsLoading, setResultsLoading] = useState<boolean>(true);
  const movieSearchRef = useMovieInputRef()?.movieSearchRef;

  const handleClearButtonClicked = () => {
    setMovieInput(""); 
    setDebouncedInput("");
  }

  const handleMovieSelected = (result: MovieMetadata) => {
    setMovieInput(""); 
    setDebouncedInput("");
    onMovieSelect(result);
  }
  
  let resultsContent: React.JSX.Element = <></>;
  let clearSearchbarContent: React.JSX.Element = <></>;

  if (debouncedInput.length > 0) {
    clearSearchbarContent = (
      <div 
      className="add-movie__input-clear-button-wrapper"
      onClick={handleClearButtonClicked}>
        <X className="add-movie__input-clear-button"/>
      </div>
    )
    
    if (resultsLoading) {
      resultsContent = (
      <div className="add-movie__search-loading">
        <span className="add-movie__search-loading-spinner"/>
      </div>
      )
    }
    else if (results.length == 0) {
      resultsContent = (
      <div className="add-movie__search-no-results">
        <p className="add-movie__search-no-results-text">No results found.</p>
      </div>
      )
    }
    else {
    resultsContent = (
      <div className="add-movie__results-container">
        {results.map((result, index) => (
          <div 
          className="add-movie__search-result" 
          key={result.imdbID || `${result.Title}--${index}`} 
          onClick={() => {handleMovieSelected(result)}}>
            <span className="add-movie__search-result-wrapper"></span>
            <button className="add-movie__search-result-wrapper-button">Add to Current List</button>
            <img 
            className="search-result-poster" 
            src={result.Poster} 
            alt="movie-image" 
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ImageNotFound}}></img>
            <div className="search-result-metadata">
              <span className="search-result-title">{result.Title}</span>
              <span className="search-result-year">{result.Year}</span>
              {/* 
              <span className="search-result-genre">{result.Genre}</span>
              */}
            </div>
            {/*
            <div className="search-result-rating">
              <Star className="search-result-star" size={8}/>
              <span className="search-result-rating-value">{result.imdbRating}</span>
            </div>
            */}
          </div>
        ))}
      </div>
      );
    }
  }

  // Debounced input handler
  useEffect(() => {
    const searchInputHandler = setTimeout(() => {
      setDebouncedInput(movieInput), 400;
      setResultsLoading(true);}
    );
    return () => clearTimeout(searchInputHandler);
  }, [movieInput]);

  // Show results from API based on user input
  useEffect(() => {
    if (debouncedInput.trim() === '') {
      setResults([]);
      setResultsLoading(false);
      return;
    }

    async function fetchAndSetMovies() {
      const movies = await SearchForMovie({ searchTerm: debouncedInput });
      setResults(movies);
      setResultsLoading(false);
    }

    fetchAndSetMovies();
  }, [debouncedInput]);

  return (
    <div className="add-movie__search">
      <input 
        className="add-movie__input" 
        name="movie-title" 
        placeholder="Search for a movie..." 
        value={movieInput}
        onChange={e => setMovieInput(e.target.value)}
        ref={movieSearchRef}
      />
      {clearSearchbarContent}
      {resultsContent}
    </div>
  )
}

export default AddMovieSearch;