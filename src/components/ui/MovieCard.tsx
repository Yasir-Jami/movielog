import "@styles/MovieCard.css";
import { useState } from "react";
import { MovieCardProps } from "types";
import { Calendar, EllipsisVertical, Heart, Trash2 } from "lucide-react";
import ImageNotFound from "assets/svgs/image-not-found.svg";

function MovieCard({movie, handleFavoriteMovie, handleDeleteMovie}: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [actionsButtonClicked, setActionsButtonClicked] = useState(false);
  
  // Display genres as bubbles
  const MovieGenresDisplay = () => {
    let genresMap;
    if (movie.movieMeta.Genre) {
      const genres: Array<string> = movie.movieMeta.Genre.split(",");
      genresMap = genres.map((genre) => (
        <span className="movie-card__genre">{genre}</span>
      ));
    }

    return (
      <span className="movie-card__genres">
        {genresMap}
      </span>
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
        {/* Movie Poster and Icons */}
        <span className="movie-card-actions-button" onClick={handleActionsButtonClicked}>
            <EllipsisVertical className="movie-card-actions-icon"/>
        </span>
        <div className="movie-card-actions">
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
        <img 
        className="movie-card__image" 
        alt={movie.movieMeta.Title} 
        src={movie.movieMeta.Poster} 
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ImageNotFound}}></img>
        
        {/* Movie Metadata */}
        <p className="movie-card__title">{movie.movieMeta.Title}</p>
        <div className="movie-card__metadata">
          <span className="movie-card__year">
            <p className="movie-card__year-text">{movie.movieMeta.Year}</p>
          </span>
          <MovieGenresDisplay/>
        </div>
    </div>
  )
}

export default MovieCard;