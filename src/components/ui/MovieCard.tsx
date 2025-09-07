import "@styles/MovieCard.css";
import { useState } from "react";
import { MovieCardProps } from "types";
import { Calendar, Drama, Heart, Trash2 } from "lucide-react";
import ImageNotFound from "assets/svgs/image-not-found.svg";

function MovieCard({movie, handleFavoriteMovie, handleDeleteMovie}: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
    if (movie.movieMeta.imdbID) 
      handleFavoriteMovie(movie.movieMeta.imdbID);
  }

  const deleteMovie = () => {
    if (movie.movieMeta.imdbID) 
      handleDeleteMovie(movie.movieMeta.imdbID);
  }

  return(
    <div className="movie-card">
        {/* Movie Poster and Icons */}
        <span 
        className={`movie-card-favorite-wrapper ${isFavorite ? "active" : ""}`} 
        onClick={toggleFavorite}>
          <Heart 
          className={`movie-card-favorite-icon ${isFavorite ? "active" : ""}`} 
          fill="none" 
          size={24}
          ></Heart>
        </span>
        <span 
        className="movie-card-delete-wrapper"
        onClick={deleteMovie}>
          <Trash2 className="movie-card-delete-icon"></Trash2>
        </span>
        <img 
        className="movie-card__image" 
        alt={movie.movieMeta.Title} 
        src={movie.movieMeta.Poster} 
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ImageNotFound}}></img>
        
        {/* Movie Metadata */}
        <p className="movie-card__title">{movie.movieMeta.Title}</p>
        <div className="movie-card__metadata">
          <span className="movie-card__year">
            <Calendar className="movie-card__calendar"/>
            <p className="movie-card__year-text">{movie.movieMeta.Year}</p>
          </span>
          <span className="movie-card__genre">
            <Drama className="movie-card__mask"/>
            <p className="movie-card__genre-text">{movie.movieMeta.Genre}</p> 
          </span>
        </div>
    </div>
  )
}

export default MovieCard;