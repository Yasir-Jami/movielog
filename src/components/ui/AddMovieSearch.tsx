import "@styles/AddMovieSearch.css";
import { MovieInfo } from "types";
import { AddMovieModalDisplay } from "types";
import ImageNotFound from "assets/svgs/image-not-found.svg";
//import DummyMovieInfo from "tests/DummyMovieData";
//import { Star } from "lucide-react";
import { useState, useEffect } from "react";

interface AddMovieSearchProps {
  setModalVisibility: React.Dispatch<React.SetStateAction<AddMovieModalDisplay>>;
  onMovieSelect: (movie: MovieInfo) => void,
}

async function SearchForMovie({ searchTerm } : {searchTerm: string}) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_MOVIES}${import.meta.env.VITE_API_SEARCH_MOVIES}`;
  let searchResults: MovieInfo[] = [];

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
    searchResults = (data.Search || []).map((movie: MovieInfo) => ({
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
      ImdbID: movie.imdbID,
    }));

    return searchResults;
  })
  .catch(err => logger.error("Error:", err));

  return searchResults;
}

function AddMovieSearch({setModalVisibility, onMovieSelect}: AddMovieSearchProps) {
  const [movieInput, setMovieInput] = useState<string>('');
  const [debouncedInput, setDebouncedInput] = useState<string>('');
  const [results, setResults] = useState<MovieInfo[]>([]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedInput(movieInput), 400);
    return () => clearTimeout(handler);
  }, [movieInput]);

  useEffect(() => {
    if (debouncedInput.trim() === '') {
      setResults([]);
      return;
    }

    async function fetchAndSetMovies() {
      const movies = await SearchForMovie({ searchTerm: debouncedInput });
      logger.log("Movies:", movies);
      setResults(movies);
    }

    fetchAndSetMovies();
  }, [debouncedInput]);

  return (
    <div>
      <form className="add-movie-modal__form">
        <input 
        className="add-movie-modal__search" 
        name="movie-title" 
        placeholder="Search for a movie..." 
        value={movieInput}
        onChange={e => setMovieInput(e.target.value)}/>
      </form>

      <div className="add-movie__search">
        {results.map((result, index) => (
          <div 
          className="add-movie__search-result" 
          key={result.imdbID || `${result.Title}--${index}`} 
          onClick={() => {setModalVisibility(AddMovieModalDisplay.Invisible); onMovieSelect(result)}}>
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
              <span className="search-result-rating-value">{result.ImdbRating}</span>
            </div>
            */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddMovieSearch;