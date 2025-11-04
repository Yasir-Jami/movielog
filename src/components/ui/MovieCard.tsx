import "@styles/MovieCard.css";
import { useState } from "react";
import { MovieCardProps } from "types";
import { EllipsisVertical, Heart, Trash2 } from "lucide-react";
import ImageNotFound from "assets/svgs/image-not-found.svg";

function MovieCard({movie, handleFavoriteMovie, handleDeleteMovie}: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [actionsButtonClicked, setActionsButtonClicked] = useState(false);
  
  // Display genres as bubbles
  const MovieGenres = () => {
    let genresMap;
    if (movie.movieMeta.Genre) {
      const genres: Array<string> = movie.movieMeta.Genre.split(",");
      genresMap = genres.map((genre, i) => (
        <span className="movie-card__genre" key={i}>{genre}</span>
      ));
    }

    return (
      <div className="movie-card__genres">
        {genresMap}
      </div>
    )
  }
  
  const toggleFavorite = () => {
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
    if (movie.movieMeta.imdbID) 
      handleFavoriteMovie(movie.movieMeta.imdbID);
  }

  const deleteMovie = () => {
    if (movie.movieMeta.imdbID) 
      handleDeleteMovie(movie.movieMeta.imdbID);
  }

  const handleActionsButtonClicked = () => {
    setActionsButtonClicked(prev => !prev);
  }

  return(
    <div className="movie-card">
        <div className="movie-card-details">
        {/* Movie Metadata */}
        <div className="movie-card__metadata">
          <p className="movie-card__title">{movie.movieMeta.Title}</p>
          <span className="movie-card__year">
            <p className="movie-card__year-text">{movie.movieMeta.Year}</p>
          </span>
          <p className="movie-card__plot">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <MovieGenres/>
        </div>
          <span className="movie-card-actions-button" onClick={handleActionsButtonClicked}>
            <EllipsisVertical className="movie-card-actions-icon"/>
          </span>
          <div className={`movie-card-actions-items ${actionsButtonClicked ? "active" : ""}`}>
            <span 
            className={`movie-card-favorite-wrapper ${isFavorite ? "active" : ""}`}
            onClick={toggleFavorite}>
            <Heart 
            className={`movie-card-favorite-icon ${isFavorite ? "active" : ""}`} 
            fill="none" 
            size={24}
            />
            </span>
            Favorite Movie
            <span 
            className="movie-card-delete-wrapper"
            onClick={deleteMovie}>
              <Trash2 className="movie-card-delete-icon"></Trash2>
            </span>
          </div>
        </div>
        <div className="movie-card__image-container">
          <span className="movie-card-overlay"></span>
          <img 
          className="movie-card__image" 
          alt={movie.movieMeta.Title} 
          src={movie.movieMeta.Poster} 
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ImageNotFound}}></img>
        </div>
          
    </div>
  )
}

export default MovieCard;