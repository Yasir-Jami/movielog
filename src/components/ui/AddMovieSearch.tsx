import "@styles/AddMovie.css";
import { MovieMetadata } from "types";
import { X, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useMovieInputRef } from "@components/contexts/MovieInputContext";
import useIsMobile from "hooks/useIsMobile";

interface AddMovieSearchProps {
  onMovieSelect: (movie: MovieMetadata) => void,
  searchBarOpen: boolean,
  setSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

function AddMovieSearch({onMovieSelect, searchBarOpen, setSearchBarOpen}: AddMovieSearchProps) {
  const [movieInput, setMovieInput] = useState<string>('');
  const [debouncedInput, setDebouncedInput] = useState<string>('');
  const [results, setResults] = useState<MovieMetadata[]>([]);
  const [resultsLoading, setResultsLoading] = useState<boolean>(true);
  const movieInputref = useMovieInputRef()?.movieSearchRef;
  const movieSearchRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleClearButtonClicked = () => {
    setMovieInput(""); 
    setDebouncedInput("");
  }

  const handleMovieSelected = (result: MovieMetadata) => {
    setMovieInput(""); 
    setDebouncedInput("");
    onMovieSelect(result);
  }

  const handleSearchButtonClick = () => {
    setSearchBarOpen(prev => !prev);
  }
  
  let resultsContent: React.JSX.Element = <></>;
  let clearSearchbarContent: React.JSX.Element = <></>;
  let loadingContent: React.JSX.Element = <></>;

  if (debouncedInput.length > 0) {
    clearSearchbarContent = (
      <div 
      className="add-movie__input-clear-button-wrapper"
      onClick={handleClearButtonClicked}>
        <X className="add-movie__input-clear-button"/>
      </div>
    )
    
    if (resultsLoading) {
      loadingContent = (
        <div className="add-movie__search-loading-wrapper">
          <span className="add-movie__search-loading-spinner"/>
        </div>
      )
    }
    else {
      loadingContent = <></>;
    }
    if (results.length == 0 && !resultsLoading) {
      resultsContent = (
      <div className="add-movie__search-no-results">
        <p className="add-movie__search-no-results-text">No results found.</p>
      </div>
      )
    }
    else {
    resultsContent = (
      <div className={`add-movie__results-container ${(searchBarOpen || !isMobile) ? "" : "hidden"}`}>
        {results.map((result, index) => (
          <div 
          className="add-movie__search-result" 
          key={result.imdbID || `${result.Title}--${index}`} 
          onClick={() => {handleMovieSelected(result)}}>
            <span className="add-movie__search-result-wrapper"></span>
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

  // Keep search bar open in desktop view
  useEffect(() => {
    if (!isMobile) {
      setSearchBarOpen(true);
    }
  }, [isMobile]);

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
      
      setResultsLoading(false);setResults(movies);
    }

    fetchAndSetMovies();
  }, [debouncedInput]);

  // Close input field when clicked outside
  useEffect(() => {
    function handleClickOutsideSearchBar(event: MouseEvent) {
      if (movieSearchRef.current && !movieSearchRef.current.contains(event.target as Node)) {
        setSearchBarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideSearchBar);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSearchBar);
    }
  }, []);

  return (
    <>
    <div className={`add-movie__search ${(searchBarOpen || !isMobile) ? "" : "hidden"}`} ref={movieSearchRef}>
      <div className="add-movie__search-bar">
        <Search className="add-movie__input-icon" size="18px"></Search>
        {loadingContent}
        {clearSearchbarContent}
        <input 
        type="text"
        className={`add-movie__input ${(searchBarOpen || !isMobile) ? "" : "hidden"}`} 
        name="movie-title" 
        placeholder="Search movies" 
        ref={movieInputref}
        value={movieInput}
        onChange={e => setMovieInput(e.target.value)}
        />
      </div>
      
      {resultsContent}
    </div>
    <Search 
      onClick={handleSearchButtonClick} 
      className={`add-movie__search-icon ${searchBarOpen ? "hidden" : ""}`} 
      size="28"></Search>
    </>
  )
}

export default AddMovieSearch;